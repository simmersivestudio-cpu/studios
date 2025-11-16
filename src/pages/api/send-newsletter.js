import { Resend } from 'resend';
import { generateNewsletterHTML, generateNewsletterText } from '@library/newsletterTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { blogPost, subscribers } = req.body;

    // Validate required fields
    if (!blogPost || !blogPost.title || !blogPost.url) {
      return res.status(400).json({ error: 'Missing required blog post data' });
    }

    if (!subscribers || !Array.isArray(subscribers) || subscribers.length === 0) {
      return res.status(400).json({ error: 'No subscribers provided' });
    }

    // Generate newsletter HTML and text
    const htmlContent = generateNewsletterHTML({
      title: blogPost.title,
      excerpt: blogPost.excerpt || blogPost.description,
      content: blogPost.content,
      url: `https://studios-connect.com${blogPost.url}`,
      author: blogPost.author,
      date: blogPost.date,
      imageUrl: blogPost.image ? `https://studios-connect.com${blogPost.image}` : null,
    });

    const textContent = generateNewsletterText({
      title: blogPost.title,
      excerpt: blogPost.excerpt || blogPost.description,
      content: blogPost.content,
      url: `https://studios-connect.com${blogPost.url}`,
      author: blogPost.author,
      date: blogPost.date,
    });

    // Helper function to delay execution
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Send emails to all subscribers with rate limit handling
    // Resend free plan: 2 requests per second, so we send in batches
    const results = [];
    for (let i = 0; i < subscribers.length; i++) {
      const email = subscribers[i];
      
      try {
        const result = await resend.emails.send({
          from: 'Studio S Newsletter <newsletter@studios-connect.com>',
          to: email,
          subject: `New from Studio S: ${blogPost.title}`,
          html: htmlContent,
          text: textContent,
        });
        console.log(`Email sent to ${email}:`, result);
        
        // Check if Resend returned an error
        if (result.error) {
          results.push({ 
            status: 'rejected', 
            reason: new Error(result.error.message),
            email 
          });
        } else {
          results.push({ 
            status: 'fulfilled', 
            value: { email, result } 
          });
        }
      } catch (error) {
        console.error(`Failed to send to ${email}:`, error);
        results.push({ 
          status: 'rejected', 
          reason: error,
          email 
        });
      }
      
      // Wait 600ms between sends (allows ~1.6 emails/sec, under the 2/sec limit)
      if (i < subscribers.length - 1) {
        await delay(600);
      }
    }

    // Count successful sends and get detailed results
    const successful = results.filter(r => r.status === 'fulfilled').length;
    const failed = results.filter(r => r.status === 'rejected').length;

    // Log any failures for debugging
    const failures = results.filter(r => r.status === 'rejected');
    const successDetails = results
      .filter(r => r.status === 'fulfilled')
      .map(r => ({
        email: r.value?.email,
        id: r.value?.result?.data?.id || r.value?.result?.id,
        response: r.value?.result
      }));
    
    if (failures.length > 0) {
      console.error('Failed sends:', failures.map((f, i) => ({
        email: subscribers[i],
        error: f.reason?.message || f.reason
      })));
    }

    console.log(`Newsletter sent: ${successful} successful, ${failed} failed`);
    console.log('Success details:', JSON.stringify(successDetails, null, 2));

    return res.status(200).json({
      success: true,
      message: `Newsletter sent to ${successful} subscribers`,
      stats: {
        total: subscribers.length,
        successful,
        failed,
      },
      details: {
        successEmails: successDetails,
        failureReasons: failures.map((f, i) => ({
          email: subscribers[i],
          reason: f.reason?.message || String(f.reason)
        }))
      }
    });

  } catch (error) {
    console.error('Error sending newsletter:', error);
    return res.status(500).json({ 
      error: 'Failed to send newsletter', 
      details: error.message 
    });
  }
}

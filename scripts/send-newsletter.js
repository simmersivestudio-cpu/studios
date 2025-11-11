/**
 * Newsletter Management Script
 * Run this script to send newsletters for new blog posts
 * 
 * Usage:
 * node scripts/send-newsletter.js
 */

const subscribers = [
  // Add your subscriber emails here
  // These will eventually come from a database
  'subscriber1@example.com',
  'subscriber2@example.com',
];

// Example: Send newsletter for the latest AI blog post
const blogPost = {
  title: 'How AI is Revolutionizing the Creative Industry in 2025',
  url: '/blog/ai-revolutionizing-creative-industry',
  excerpt: 'Artificial Intelligence has become an indispensable tool in the creative industry, transforming how we approach design, video production, and content creation. Discover how AI is amplifying creativity and what it means for creative professionals.',
  author: 'Sun Park',
  date: '2025-10-28',
  image: '/img/blog/small/1.jpg',
};

async function sendNewsletter() {
  try {
    const response = await fetch('http://localhost:3000/api/send-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogPost,
        subscribers,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Newsletter sent successfully!');
      console.log(`📧 Sent to ${data.stats.successful} subscribers`);
      if (data.stats.failed > 0) {
        console.log(`❌ Failed: ${data.stats.failed}`);
      }
    } else {
      console.error('❌ Error sending newsletter:', data.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

sendNewsletter();

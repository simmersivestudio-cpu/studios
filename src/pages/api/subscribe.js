import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Send notification email to yourself about new subscriber
    const data = await resend.emails.send({
      from: 'Studio S Newsletter <newsletter@studios-connect.com>',
      to: 'simmersivestudio@gmail.com', // Your receiving email
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr />
        <p><em>This subscriber has signed up for your newsletter. Add them to your email list to receive updates.</em></p>
      `,
    });

    // Optionally, send a welcome email to the subscriber
    await resend.emails.send({
      from: 'Studio S Newsletter <newsletter@studios-connect.com>',
      to: email,
      subject: 'Welcome to Studio S Newsletter',
      html: `
        <h2>Welcome to Studio S!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive weekly insights on AI, AR/VR, and emerging technologies shaping the creative industry.</p>
        <p>Stay tuned for expert perspectives, industry trends, and practical tips to elevate your digital presence.</p>
        <br />
        <p>Best regards,<br />The Studio S Team</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return res.status(500).json({ error: 'Failed to subscribe', details: error.message });
  }
}

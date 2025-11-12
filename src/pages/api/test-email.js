import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const result = await resend.emails.send({
      from: 'Studio S <newsletter@studios-connect.com>',
      to: 'simmersivestudio@gmail.com', // Your email
      subject: 'Test Email from Studio S',
      html: '<h1>Hello!</h1><p>This is a test email to verify Resend is working.</p>',
    });

    console.log('Email sent successfully:', result);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Test email sent',
      result: result 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: error.message,
      details: error
    });
  }
}

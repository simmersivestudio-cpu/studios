import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const segmentId = process.env.RESEND_AUDIENCE_ID; // Named AUDIENCE_ID but contains segment ID
    
    console.log('Fetching subscribers for segment:', segmentId);
    
    if (!segmentId) {
      return res.status(400).json({ 
        error: 'RESEND_AUDIENCE_ID not configured',
        message: 'Please create a segment in Resend dashboard and add the ID to .env.local'
      });
    }

    // Fetch all contacts from Resend segment
    const contacts = await resend.contacts.list({
      segmentId: segmentId,
    });

    console.log('Resend API response:', JSON.stringify(contacts, null, 2));

    // Extract email addresses - handle different response structures
    const subscriberData = contacts.data?.data || contacts.data || [];
    const subscribers = subscriberData.map(contact => contact.email).filter(Boolean);

    console.log(`Found ${subscribers.length} subscribers`);

    res.status(200).json({
      subscribers,
      count: subscribers.length,
      debug: {
        segmentId,
        responseStructure: typeof contacts.data
      }
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ 
      error: 'Failed to fetch subscribers',
      details: error.message,
      audienceId: process.env.RESEND_AUDIENCE_ID 
    });
  }
}

# Newsletter Subscriber Database Setup with Resend

## Overview
Your newsletter system now uses Resend's built-in Contact/Audience management to store subscribers. No separate database needed!

## Setup Steps

### 1. Create an Audience in Resend

1. Go to https://resend.com/audiences
2. Click "Create Audience" or "Create Segment"
3. Name it something like "Newsletter Subscribers" or "Studio S Newsletter"
4. Copy the Audience ID (it looks like: `aud_xxxxxxxxxxxxx`)

### 2. Add Audience ID to Environment Variables

Add this line to your `.env.local` file:

```bash
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxxx
```

Replace `aud_xxxxxxxxxxxxx` with your actual audience ID from step 1.

### 3. How It Works

**When someone subscribes:**
- They fill out the newsletter form on your website
- `/api/subscribe` automatically adds them to your Resend audience
- They receive a welcome email
- You receive a notification email

**When you send a newsletter:**
1. Go to `http://localhost:3001/admin/newsletter` (or your production URL)
2. Click "🔄 Reload from Resend" - this fetches all subscribers from Resend
3. Select a blog post
4. Click "Send Newsletter"

### 4. Managing Subscribers

**View all subscribers:**
- Go to https://resend.com/audiences
- Click on your audience to see all contacts

**Remove a subscriber:**
- In Resend dashboard, find the contact and delete them
- Or they can unsubscribe via the link in emails (once you set it up)

**Export subscribers:**
- Resend allows you to export your contact list as CSV

## Alternative Options (If You Need More Features)

If you need more advanced features like subscriber analytics, segmentation, or custom fields:

### Option 2: Airtable (Simple, Free Tier Available)
- Create a base with fields: Email, Name, Subscribed Date, Status
- Use Airtable API to add/fetch subscribers
- Pros: Easy to use, good UI, free for small lists
- Cons: Rate limits on free tier

### Option 3: PostgreSQL/MySQL with Vercel Postgres
- Create a `subscribers` table
- Use Prisma or raw SQL queries
- Pros: Full control, scalable
- Cons: More complex setup

### Option 4: MongoDB with MongoDB Atlas
- Free tier available
- Store subscribers as documents
- Pros: Flexible schema, good for growth
- Cons: Requires more setup

## Current Implementation Status

✅ Subscribe API saves to Resend contacts
✅ Newsletter admin fetches subscribers from Resend
✅ Subscribers automatically loaded in admin page
✅ Reload button to refresh subscriber list
⚠️ Unsubscribe functionality (need to add unsubscribe URL)
⚠️ Domain verification (SPF/DMARC pending)

## Next Steps

1. Create audience in Resend dashboard
2. Add `RESEND_AUDIENCE_ID` to `.env.local`
3. Restart your dev server: `npm run dev`
4. Test subscribing via your website form
5. Check Resend dashboard to see the new contact
6. Send a test newsletter from admin page

## Notes

- Resend free tier: 3,000 emails/month, 100/day
- Contacts are stored permanently in Resend (unless you delete them)
- You can have multiple audiences for different purposes
- Consider upgrading Resend plan if you need more emails or audiences

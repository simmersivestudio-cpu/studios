# Environment Setup

## Required Environment Variables

This project requires environment variables to be set in a `.env.local` file.

### Setup Instructions

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your actual values in `.env.local`:
   - **RESEND_API_KEY**: Get from https://resend.com/api-keys
     - ⚠️ Create a "Full Access" key (not just "Sending Access")
   - **RESEND_AUDIENCE_ID**: Your segment ID from https://resend.com/audiences

### Security Notes

- ⚠️ **NEVER commit `.env.local` to Git**
- The `.env.local` file is already in `.gitignore`
- Only commit `.env.example` with placeholder values
- If you accidentally commit API keys:
  1. Immediately revoke them in the service dashboard
  2. Generate new keys
  3. Remove the file from Git history

## Resend Setup

1. Create account at https://resend.com
2. Verify your domain at https://resend.com/domains
3. Create a "Full Access" API key
4. Create an audience/segment for newsletter subscribers
5. Copy the API key and segment ID to `.env.local`

/**
 * Newsletter Email Template for Studio S
 * Generates HTML email from blog post data
 */

export function generateNewsletterHTML({ title, excerpt, content, url, author, date, imageUrl }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background-color: #1a1a1a;
            padding: 40px 20px;
            text-align: center;
        }
        .logo {
            font-size: 32px;
            font-weight: bold;
            color: #ffffff;
            text-decoration: none;
        }
        .accent {
            color: #ff6b6b;
        }
        .hero-image {
            width: 100%;
            height: auto;
            display: block;
        }
        .content {
            padding: 40px 30px;
        }
        .title {
            font-size: 28px;
            font-weight: bold;
            line-height: 1.3;
            margin: 0 0 20px 0;
            color: #1a1a1a;
        }
        .meta {
            font-size: 14px;
            color: #666666;
            margin-bottom: 20px;
        }
        .excerpt {
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            margin-bottom: 30px;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background-color: #1a1a1a;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
        }
        .cta-button:hover {
            background-color: #333333;
        }
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 40px 0;
        }
        .footer {
            background-color: #1a1a1a;
            color: #ffffff;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }
        .footer-description {
            margin: 20px 0;
            color: #cccccc;
            line-height: 1.6;
        }
        .social-links {
            margin: 20px 0;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #ffffff;
            text-decoration: none;
        }
        .unsubscribe {
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
        }
        .unsubscribe a {
            color: #cccccc;
            text-decoration: underline;
        }
        @media only screen and (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            .title {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <a href="https://studios-connect.com" class="logo">
                Studio S<span class="accent">.</span>
            </a>
        </div>

        <!-- Hero Image -->
        ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="hero-image" />` : ''}

        <!-- Content -->
        <div class="content">
            <h1 class="title">${title}</h1>
            
            <div class="meta">
                ${author ? `By ${author} • ` : ''}${date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
            </div>

            <div class="excerpt">
                ${excerpt}
            </div>

            ${content ? `
            <div style="font-size: 16px; line-height: 1.8; color: #333333; margin: 30px 0;">
                ${content.split('\n\n').slice(0, 3).map(paragraph => 
                    `<p style="margin: 0 0 20px 0;">${paragraph}</p>`
                ).join('')}
            </div>
            ` : ''}

            <center>
                <a href="${url}" class="cta-button">Read Full Article</a>
            </center>

            <div class="divider"></div>

            <p style="color: #666666; font-size: 14px; line-height: 1.6;">
                This week at Studio S, we're exploring the latest in creative technology. 
                Don't miss our insights on AI, AR/VR, and emerging digital trends.
            </p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-description">
                At Studio S, creativity meets innovation. We bring together design mastery, 
                technical expertise, and forward-thinking vision — bridging traditional 
                storytelling with the power of XR, AR, and AI.
            </div>

            <div class="social-links">
                <a href="https://linkedin.com" class="social-link">LinkedIn</a>
                <a href="https://instagram.com" class="social-link">Instagram</a>
                <a href="https://youtube.com" class="social-link">YouTube</a>
                <a href="https://tiktok.com" class="social-link">TikTok</a>
            </div>

            <div class="unsubscribe">
                <p>
                    Studio S<br>
                    Washington, DC<br>
                    <a href="mailto:simmersivestudio@gmail.com">simmersivestudio@gmail.com</a>
                </p>
                <p>
                    You're receiving this email because you subscribed to Studio S newsletter.<br>
                    <a href="{{{unsubscribe_url}}}">Unsubscribe</a> | <a href="https://studios-connect.com">Visit Website</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
  `;
}

/**
 * Generate plain text version of newsletter
 */
export function generateNewsletterText({ title, excerpt, content, url, author, date }) {
  const contentPreview = content ? '\n\n' + content.split('\n\n').slice(0, 3).join('\n\n') + '\n' : '';
  
  return `
STUDIO S NEWSLETTER
==================

${title}

${author ? `By ${author}` : ''} ${date ? `• ${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}` : ''}

${excerpt}
${contentPreview}

Read the full article: ${url}

---

At Studio S, creativity meets innovation. We bring together design mastery, technical expertise, and forward-thinking vision — bridging traditional storytelling with the power of XR, AR, and AI.

Follow us:
LinkedIn: https://linkedin.com
Instagram: https://instagram.com
YouTube: https://youtube.com
TikTok: https://tiktok.com

Studio S
Washington, DC
simmersivestudio@gmail.com

You're receiving this email because you subscribed to Studio S newsletter.
Unsubscribe: {{{unsubscribe_url}}}
  `;
}

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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #000;
            padding-bottom: 20px;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #000;
            margin: 0;
        }
        .subtitle {
            color: #666;
            font-size: 14px;
            margin-top: 5px;
        }
        .featured-image {
            width: 100%;
            height: auto;
            border-radius: 4px;
            margin: 20px 0;
        }
        h1 {
            color: #000;
            font-size: 32px;
            margin: 20px 0;
            line-height: 1.3;
        }
        .meta {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
        }
        .excerpt {
            font-size: 18px;
            color: #555;
            margin: 20px 0;
            font-style: italic;
        }
        .content {
            color: #333;
            font-size: 16px;
            line-height: 1.8;
            margin: 20px 0;
        }
        .cta-button {
            display: inline-block;
            padding: 14px 32px;
            background-color: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            margin: 30px 0;
            font-weight: bold;
            text-align: center;
        }
        .cta-button:hover {
            background-color: #333;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 class="logo">Studio S</h2>
            <p class="subtitle">Creative Stories & Updates</p>
        </div>
        
        ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="featured-image" />` : ''}
        
        <h1>${title}</h1>
        
        <div class="meta">
            ${author ? `By ${author}` : ''} ${date ? `• ${date}` : ''}
        </div>
        
        ${excerpt ? `<p class="excerpt">${excerpt}</p>` : ''}
        
        <div class="content">
            ${content || ''}
        </div>
        
        <center>
            <a href="${url}" class="cta-button">Read Full Article</a>
        </center>
        
        <div class="footer">
            <p>You're receiving this email because you subscribed to Studio S newsletter.</p>
            <p>© ${new Date().getFullYear()} Studio S. All rights reserved.</p>
            <p><a href="https://studios-connect.com">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
  `.trim();
}

export function generateNewsletterText({ title, excerpt, content, url, author, date }) {
  return `
${title}

${author ? `By ${author}` : ''} ${date ? `• ${date}` : ''}

${excerpt || ''}

${content || ''}

Read the full article: ${url}

---
You're receiving this email because you subscribed to Studio S newsletter.
© ${new Date().getFullYear()} Studio S. All rights reserved.
Visit our website: https://studios-connect.com
  `.trim();
}

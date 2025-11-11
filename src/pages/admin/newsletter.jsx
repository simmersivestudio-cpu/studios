import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function NewsletterAdmin() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [subscribers, setSubscribers] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSendNewsletter = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const subscriberList = subscribers
        .split('\n')
        .map(email => email.trim())
        .filter(email => email.length > 0);

      if (subscriberList.length === 0) {
        setStatus({ type: 'error', message: 'Please add at least one subscriber email' });
        setLoading(false);
        return;
      }

      if (!selectedPost) {
        setStatus({ type: 'error', message: 'Please select a blog post' });
        setLoading(false);
        return;
      }

      const response = await fetch('/api/send-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blogPost: selectedPost,
          subscribers: subscriberList,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        let message = `Newsletter sent! Successful: ${data.stats.successful}, Failed: ${data.stats.failed}`;
        
        // Show success details
        if (data.details?.successEmails && data.details.successEmails.length > 0) {
          message += '\n\nSuccessfully sent to:';
          data.details.successEmails.forEach(detail => {
            const emailId = detail.id || 'N/A';
            const email = detail.email || 'unknown';
            message += `\n✓ ${email} - Email ID: ${emailId}`;
          });
        }
        
        // Show failure details
        if (data.stats.failed > 0 && data.details?.failureReasons) {
          message += '\n\nFailed sends:';
          data.details.failureReasons.forEach(failure => {
            message += `\n✗ ${failure.email}: ${failure.reason}`;
          });
          message += '\n\nNote: With Resend free plan, emails can only be sent to verified addresses. Add recipients in your Resend dashboard at https://resend.com/audiences';
        }
        
        setStatus({ 
          type: data.stats.failed > 0 ? 'warning' : 'success', 
          message: message
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send newsletter' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred: ' + error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Newsletter Admin - Studio S</title>
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        padding: '40px 20px', 
        backgroundColor: '#0c0c0c',
        color: '#fff',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>Newsletter Admin</h1>
          <p style={{ color: '#999', marginBottom: '40px' }}>Send blog post newsletters to subscribers</p>

          <form onSubmit={handleSendNewsletter}>
            {/* Blog Post Selection */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '1.1em' }}>
                Select Blog Post
              </label>
              <BlogPostSelect onSelect={setSelectedPost} />
            </div>

            {/* Subscribers Input */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '1.1em' }}>
                Subscriber Emails (one per line)
              </label>
              <textarea
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
                placeholder="subscriber1@example.com&#10;subscriber2@example.com&#10;subscriber3@example.com"
                rows={8}
                style={{
                  width: '100%',
                  padding: '15px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Status Message */}
            {status && (
              <div style={{
                padding: '15px',
                marginBottom: '20px',
                backgroundColor: status.type === 'success' ? '#1a4d2e' : status.type === 'warning' ? '#4d3a1a' : '#4d1a1a',
                border: `1px solid ${status.type === 'success' ? '#2d7a4f' : status.type === 'warning' ? '#7a5a2d' : '#7a2d2d'}`,
                borderRadius: '8px',
                color: status.type === 'success' ? '#4ade80' : status.type === 'warning' ? '#fbbf24' : '#f87171',
                whiteSpace: 'pre-line'
              }}>
                {status.message}
              </div>
            )}

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '15px 40px',
                backgroundColor: loading ? '#555' : '#fff',
                color: '#0c0c0c',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1em',
                fontWeight: 'bold',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}
            >
              {loading ? 'Sending...' : 'Send Newsletter'}
            </button>
          </form>

          {/* Info Box */}
          <div style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '8px'
          }}>
            <h3 style={{ fontSize: '1.2em', marginBottom: '10px' }}>ℹ️ How to use:</h3>
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#aaa' }}>
              <li>Select a blog post from the dropdown</li>
              <li>Add subscriber email addresses (one per line)</li>
              <li>Click "Send Newsletter" to distribute the email</li>
            </ol>
            <p style={{ marginTop: '15px', color: '#fbbf24', fontSize: '0.9em', backgroundColor: '#4d3a1a', padding: '10px', borderRadius: '5px' }}>
              ⚠️ <strong>Important:</strong> With Resend's free plan, you can only send to verified email addresses. 
              Add recipients at <a href="https://resend.com/audiences" target="_blank" style={{ color: '#fbbf24', textDecoration: 'underline' }}>resend.com/audiences</a> first.
            </p>
            <p style={{ marginTop: '15px', color: '#999', fontSize: '0.9em' }}>
              💡 Tip: In the future, this will integrate with a subscriber database automatically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Blog Post Select Component
function BlogPostSelect({ onSelect }) {
  const [posts, setPosts] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    // Fetch blog posts on component mount
    fetch('/api/blog-posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || []);
      })
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  const handleChange = (e) => {
    const postId = e.target.value;
    setSelectedId(postId);
    
    if (!postId) {
      onSelect(null);
      return;
    }

    // Fetch full post content including HTML
    fetch(`/api/blog-post?id=${postId}`)
      .then(res => res.json())
      .then(fullPost => {
        onSelect({
          title: fullPost.title,
          url: `/blog/${postId}`,
          excerpt: fullPost.description || fullPost.title,
          content: fullPost.content,
          author: fullPost.author,
          date: fullPost.date,
          image: fullPost.image || '/img/blog/small/1.jpg'
        });
      })
      .catch(err => {
        console.error('Error fetching full post:', err);
        // Fallback to basic info if full fetch fails
        const post = posts.find(p => p.id === postId);
        if (post) {
          onSelect({
            title: post.title,
            url: `/blog/${postId}`,
            excerpt: post.description || post.title,
            author: 'Sun Park',
            date: post.date,
            image: post.image || '/img/blog/small/1.jpg'
          });
        }
      });
  };

  return (
    <select
      value={selectedId}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '15px',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
      }}
    >
      <option value="">-- Select a blog post --</option>
      {posts.map((post) => (
        <option key={post.id} value={post.id}>
          {post.title} ({post.date})
        </option>
      ))}
    </select>
  );
}

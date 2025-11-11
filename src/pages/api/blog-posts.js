import { getSortedPostsData } from '@library/posts';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const posts = getSortedPostsData();
    
    res.status(200).json({
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
        date: post.date,
        description: post.description,
        image: post.image
      }))
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}

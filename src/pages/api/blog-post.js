import { getPostData } from '@library/posts';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  try {
    const post = await getPostData(id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.status(200).json({
      id: post.id,
      title: post.title,
      date: post.date,
      description: post.description,
      image: post.image,
      content: post.contentHtml,
      author: post.author?.name || 'Studio S Team'
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
}

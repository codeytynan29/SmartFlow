import React, { useState } from 'react';

const TechForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleString(),
      author: anonymous ? 'Anonymous' : 'John Doe - ACME HVAC', // Replace with real user data later
      flagged: false
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setAnonymous(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Technician Forum</h2>

      <textarea
        rows={4}
        placeholder="Share your story or tip..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          Post anonymously
        </label>
      </div>

      <button onClick={handlePost} style={{ marginBottom: '20px' }}>
        Post
      </button>

      <div>
        {posts.map(post => (
          <div key={post.id} style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '10px',
            background: '#f9f9f9'
          }}>
            <div style={{ fontWeight: 'bold' }}>{post.author}</div>
            <div style={{ fontSize: '0.9em', color: '#666' }}>{post.timestamp}</div>
            <p style={{ marginTop: '8px' }}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechForum;

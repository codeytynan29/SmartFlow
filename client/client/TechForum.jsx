import React, { useState, useRef } from 'react';

const TechForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [media, setMedia] = useState(null);
  const fileInputRef = useRef();

  // Simulate moderation: block anything with "bad" in the filename
  const simulateModeration = (file) => {
    const blocked = /bad|nsfw|nude/i.test(file.name);
    return !blocked;
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video');
    const isImage = file.type.startsWith('image');

    if (!isVideo && !isImage) {
      alert('Only images and videos are allowed.');
      return;
    }

    if (isVideo && file.size > 300 * 1024 * 1024) { // ~5min HD cap
      alert('Video must be under 5 minutes.');
      return;
    }

    if (!simulateModeration(file)) {
      alert('This media was flagged by moderation and cannot be posted.');
      fileInputRef.current.value = '';
      return;
    }

    setMedia(file);
  };

  const handlePost = () => {
    if (!newPost.trim() && !media) return;

    const mediaURL = media ? URL.createObjectURL(media) : null;

    const post = {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleString(),
      author: anonymous ? 'Anonymous' : 'John Doe - ACME HVAC', // Replace later
      mediaType: media?.type,
      mediaURL,
      flagged: false
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setAnonymous(false);
    setMedia(null);
    fileInputRef.current.value = '';
  };

  const handleFlag = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, flagged: true } : post
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Technician Forum</h2>

      <textarea
        rows={4}
        placeholder="Share your story, tip, or update..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={handleMediaUpload}
        style={{ marginBottom: '10px' }}
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
          <div
            key={post.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '12px',
              background: post.flagged ? '#ffe0e0' : '#f9f9f9'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{post.author}</div>
            <div style={{ fontSize: '0.85em', color: '#666' }}>{post.timestamp}</div>
            <p style={{ marginTop: '8px' }}>{post.content}</p>

            {post.mediaURL && post.mediaType?.startsWith('image') && (
              <img src={post.mediaURL} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />
            )}

            {post.mediaURL && post.mediaType?.startsWith('video') && (
              <video controls style={{ width: '100%', marginTop: '10px' }}>
                <source src={post.mediaURL} type={post.mediaType} />
                Your browser does not support the video tag.
              </video>
            )}

            <button
              onClick={() => handleFlag(post.id)}
              style={{ marginTop: '10px', fontSize: '0.85em', color: '#b00' }}
            >
              {post.flagged ? 'Flagged for Review' : 'Flag this post'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechForum;

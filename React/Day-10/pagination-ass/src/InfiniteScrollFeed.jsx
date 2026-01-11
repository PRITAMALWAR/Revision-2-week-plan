import React, { useState } from "react";

const generatePosts = () => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    author: `Author ${(i % 10) + 1}`,
    content: `This is post number ${i + 1}`,
    likes: Math.floor(Math.random() * 500),
    timestamp: new Date(Date.now() - i * 3600000).toISOString(),
  }));
};

export default function InfiniteScrollFeed() {
  const allPosts = generatePosts();

  const [posts, setPosts] = useState(allPosts.slice(0, 20)); 
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const currentCount = posts.length;
      const nextPosts = allPosts.slice(currentCount, currentCount + 20);

      setPosts([...posts, ...nextPosts]);
      setLoading(false);
    }, 1000); 
  };

  const allLoaded = posts.length >= allPosts.length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Infinite Scroll Feed</h2>

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>{post.author}</strong> -{" "}
              {new Date(post.timestamp).toLocaleString()}
            </p>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : allLoaded ? (
          <p>No more posts</p>
        ) : (
          <button onClick={loadMore}>Load More</button>
        )}
      </div>
    </div>
  );
}

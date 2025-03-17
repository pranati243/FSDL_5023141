import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  const commentRef = useRef(null);

  const scrollToComments = () => commentRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <h1>Post {id}</h1>
      <button onClick={scrollToComments}>Go to Comments</button>
      <div ref={commentRef}>
        <h2>Comments</h2>
        <p>No comments yet.</p>
      </div>
    </div>
  );
}

export default PostPage;

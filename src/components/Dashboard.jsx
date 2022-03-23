import React, { useState, useEffect } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Dashboard(props) {
    const username = props.username;
    const [posts, setPosts] = useState([]);
  
    const getPostData = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setPosts(data);
    };
  
    const searchPost = async (username) => {
      const response = await fetch(`${API_URL}?username=${username}`);
      const data = await response.json();
      setPosts(data);
    };
  
    useEffect(() => {
      getPostData();
    }, []);
  
    useEffect(() => {
      username ? searchPost(username) : getPostData();
    }, [props]);
  
    return (
      <div>
        {posts.length > 0 ? (
          <div className="post-card">
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        ) : (
          <div className="empty">No Post Found</div>
        )}
      </div>
    );
}

export default Dashboard
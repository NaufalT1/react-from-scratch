import React, { useState, useEffect } from "react";
import Post from "./Post";


function Dashboard(props) {  
    return (
      <div>
        {props.postList ? (
          <div className="post-card">
            {props.postList.map((post) => (
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
import React from 'react'

function Post({post}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <div> {post.body}</div>
        <div> name = {post.userId}</div>
    </div>
  )
}

export default Post
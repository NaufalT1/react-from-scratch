import React from 'react'
import { useEffect, useState } from 'react'

function Profile(props) {
    console.log(props)
    
  return (
    <div className='profile-container'>
        <div className='left-side'>
            <h1>{props.user.map((user)=>user.name)}</h1>
            <ul>
                <li>username: {props.user.map((user)=>user.username)}</li>
                <li>email: {props.user.map((user)=>user.email)}</li>
                <li>phone: {props.user.map((user)=>user.phone)}</li>
                <li>website: {props.user.map((user)=>user.website)}</li>
            </ul>
        </div>
        <div className='right-side'>
            {props.posts.map((post)=>{
                return(
                    <div className='user-post'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div> 
                )
            })}
            
        </div>
    </div>
  )
}

export default Profile
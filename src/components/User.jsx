import React from 'react'

function User({user}) {
  return (
    <div>
        <h2>{user.username}</h2>
        <div> name = {user.name}</div>
        <div> email = {user.email}</div>
        <div> company = {user.company.name}</div>
    </div>
  )
}

export default User
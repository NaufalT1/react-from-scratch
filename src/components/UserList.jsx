import React, { useState, useEffect } from "react";
import User from "./User";



function UserList(props) {
  return (
    <div>
      {props.userList ? (
        <div className="user-card">
          {props.userList.map((user) => (
            <User user={user} />
          ))}
        </div>
      ) : (
        <div className="empty">No User Found</div>
      )}
    </div>
  );
}

export default UserList;

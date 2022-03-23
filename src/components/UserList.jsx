import React, { useState, useEffect } from "react";
import User from "./User";

function UserList(props) {
    const userListItem = props.userList.map((user) => {
        return (
          <div className="user-card" key={user.id}
          onClick={()=>props.userClick(user.id)}>
            <User user={user} />
          </div>
        );
      });
    <div className="empty">No User Found</div>

  return (<div className="user-list">{userListItem}</div>);
}

export default UserList;

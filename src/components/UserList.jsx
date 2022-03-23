import React, { useState, useEffect } from "react";
import User from "./User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserList(props) {
  const username = props.username;
  const [users, setUsers] = useState([]);

  const getPostData = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setUsers(data);
  };

  const searchUser = async (username) => {
    const response = await fetch(`${API_URL}?username=${username}`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  useEffect(() => {
    username ? searchUser(username) : getPostData();
  }, [props]);

  return (
    <div>
      {users.length > 0 ? (
        <div className="user-card">
          {users.map((user) => (
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

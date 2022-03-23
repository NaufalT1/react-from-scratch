import React, { useState, useEffect, useRef } from "react";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import UserList from "../components/UserList";
import SearchIcon from "../assets/SearchIcon.svg";
import "./Home.css";

const API_URL_USER = "https://jsonplaceholder.typicode.com/users";
const API_URL_POST = "https://jsonplaceholder.typicode.com/posts";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSite: "Home/UserList/Profile",
      keyword: "",
      userList: [],
      postList: [],
    };
  }

  componentDidMount() {
    this.setState({ activeSite: "Home"});
    this.searchPost(null);
  }

  searchUser = async (keyword) => {
    {
      if (keyword){
            const response = await fetch(`${API_URL_USER}?username=${keyword}`);
            const data = await response.json();
            this.setState({userList: data});
          }
        else {
            const response = await fetch(`${API_URL_USER}`);
            const data = await response.json();
            this.setState({userList: data});
          };
    }
  };

  searchPost = async (userId) => {
    {
      if (userId){
            const response = await fetch(`${API_URL_POST}?userId=${userId}`);
            const data = await response.json();
            this.setState({postList: data});
          }
        else {
            const response = await fetch(`${API_URL_POST}`);
            const data = await response.json();
            this.setState({postList: data});
          };
    }
  };


  render() {
    return (
      <div className="Home-screen">
        <div className="Heading">
          <h1
            onClick={() => {
              this.setState({ activeSite: "Home" });
            }}
          >
            Some Sosmed App
          </h1>
          <input
            className="search-bar"
            placeholder="Search User"
            value={this.state.keyword}
            onChange={(item) => this.setState({ keyword: item.target.value }
              )}
          />
          <img
            className="search-icon"
            src={SearchIcon}
            alt="search"
            onClick={() => {
              this.searchUser(this.state.keyword)
              this.setState({ activeSite: "UserList" });
            }}
          />
          <div className="nav-button">navigation</div>
        </div>

        {this.state.activeSite == "Home" ? (
          <div className="Container">
            <Dashboard postList={this.state.postList}/>
          </div>
        ) : this.state.activeSite == "UserList" ? (
          <div className="Container">
            <UserList userList={this.state.userList} />
          </div>
        ) : this.state.activeSite == "Profile" ? (
          <div className="Container">
            <Profile />
          </div>
        ) : (
          <div>Page Not Found</div>
        )}
      </div>
    );
  }
}

export default Home;

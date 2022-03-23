import React, { useState, useEffect, useRef } from "react";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import UserList from "../components/UserList";
import SearchIcon from "../assets/SearchIcon.svg";
import "./Home.css";
import { FiSearch } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { GiBirdTwitter } from "react-icons/gi";

const API_URL_USER = "https://jsonplaceholder.typicode.com/users";
const API_URL_POST = "https://jsonplaceholder.typicode.com/posts";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1,
      activeSite: "Home/UserList/Profile",
      keyword: "",
      userList: [],
      postList: [],
      selectedUser: [],
      selectedUserPosts: [],
    };
  }

  componentDidMount() {
    this.setState({ activeSite: "Home" });
    this.searchPost(null);
  }

  searchUser = async (keyword) => {
    {
      if (keyword) {
        const response = await fetch(`${API_URL_USER}?username=${keyword}`);
        const data = await response.json();
        this.setState({ userList: data });
      } else {
        const response = await fetch(`${API_URL_USER}`);
        const data = await response.json();
        this.setState({ userList: data });
      }
    }
  };

  searchPost = async (userId) => {
    {
      if (userId) {
        const response = await fetch(`${API_URL_POST}?userId=${userId}`);
        const data = await response.json();
        this.setState({ postList: data });
      } else {
        const response = await fetch(`${API_URL_POST}`);
        const data = await response.json();
        this.setState({ postList: data });
      }
    }
  };

  searchProfile = async (userId) => {
    {
      if (userId) {
        const response1 = await fetch(`${API_URL_POST}?userId=${userId}`);
        const data1 = await response1.json();
        this.setState({ selectedUserPosts: data1 });

        const response2 = await fetch(`${API_URL_USER}?id=${userId}`);
        const data2 = await response2.json();
        this.setState({ selectedUser: data2 });
      } else {
        const response1 = await fetch(
          `${API_URL_POST}?userId=${this.state.activeId}`
        );
        const data1 = await response1.json();
        this.setState({ selectedUserPosts: data1 });

        const response2 = await fetch(
          `${API_URL_USER}?id=${this.state.activeId}`
        );
        const data2 = await response2.json();
        this.setState({ selectedUser: data2 });
      }
      this.setState({ activeSite: "Profile" });
    }
  };

  render() {
    return (
      <div className="Home-screen">
        <div className="Heading">
          <div className="Website-Name">
            <a
              onClick={() => {
                this.setState({ activeSite: "Home" });
              }}
            >
              <h1>
                <GiBirdTwitter />
                Social App
              </h1>
            </a>
          </div>
          <div className="search-and-profile">
          <div className="search-div">
            <input
              className="search-bar"
              placeholder="Search User"
              value={this.state.keyword}
              onChange={(item) => this.setState({ keyword: item.target.value })}
            />
            <a
              className="search-icon"
              src={SearchIcon}
              alt="search"
              onClick={() => {
                this.searchUser(this.state.keyword);
                this.setState({ activeSite: "UserList" });
              }}
            >
              <FiSearch size={30} color={"white"} />
            </a>
          </div>
          <div
            className="nav-button"
            onClick={() => {
              this.searchProfile(null);
              this.setState({ activeSite: "Profile" });
            }}
          >
            <ImProfile size={30} color={"black"} />
            <h3>Profile</h3>
          </div>
            
          </div>
        </div>

        {this.state.activeSite == "Home" ? (
          <div className="Container">
            <Dashboard postList={this.state.postList} />
          </div>
        ) : this.state.activeSite == "UserList" ? (
          <div className="Container">
            <UserList userList={this.state.userList} userClick={this.searchProfile} />
          </div>
        ) : this.state.activeSite == "Profile" ? (
          <div className="Container">
            <Profile
              user={this.state.selectedUser}
              posts={this.state.selectedUserPosts}
            />
          </div>
        ) : (
          <div>Page Not Found</div>
        )}
        <style jsx>
          {`
            
          `}
        </style>
      </div>
    );
  }
}

export default Home;

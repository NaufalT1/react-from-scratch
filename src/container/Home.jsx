import React, { useState, useEffect, useRef } from "react";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import UserList from "../components/UserList";
import SearchIcon from "../assets/SearchIcon.svg";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSite: "Home/UserList/Profile",
      keyword: "",
    };
  }
  componentDidMount() {
    this.setState({ activeSite: "Home" });
  }
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
            onChange={(item) => this.setState({ keyword: item.target.value })}
          />
          <img
            className="search-icon"
            src={SearchIcon}
            alt="search"
            onClick={() => {
              this.setState({ activeSite: "UserList" });
            }}
          />
          <div className="nav-button">navigation</div>
        </div>

        {this.state.activeSite == "Home" ? (
          <div className="Container">
            <Dashboard />
          </div>
        ) : this.state.activeSite == "UserList" ? (
          <div className="Container">
            <UserList username={this.state.keyword}/>
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

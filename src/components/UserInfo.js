import React, { Component } from "react";

import user from "../data/user";
import grid from "../data/grid.svg";
import users from "../data/users.svg";
import add from "../data/add-user.svg";

class UserInfo extends Component {
  render() {
    return (
      <div className="UserInfo">
        <img src={user.photo} alt={user.name} className="User-photo"/>
        <div className="User-detail">
          <h2 className="User-name">{user.name}</h2>
          <p className="User-bio">
            {user.bio}
          </p>
          <div className="User-stats">
            <span key={user.stats[0].stat} className="User-stat">
              <img className="User-icon" src={grid} alt={user.stats[0].stat}/>
              <span className="User-count">{user.stats[0].count}</span>
            </span>
            <span key={user.stats[1].stat} className="User-stat">
              <img className="User-icon" src={users} alt={user.stats[1].stat}/>
              <span className="User-count">{user.stats[1].count}</span>
            </span>
          </div>
        </div>
        <span className="User-add">
          <img className="User-add-icon" src={add} alt="Add Friend" />
        </span>
      </div>
    );
  }
}

export default UserInfo;

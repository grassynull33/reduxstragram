import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Img from "./Img";

import user from "../data/user";
import heart from "../data/heart.svg";
import message from "../data/message.svg";

class Photo extends Component {
  render() {
    const { post, index, comments } = this.props;

    return (
      <div className="Photo">
        <Link className="Photo-link" to={`/view/${post.code}`}>
          <Img source={post.display_src} caption={post.caption} />
        </Link>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span key={post.likes} className="Photo-likes">{post.likes}</span>
        </ReactCSSTransitionGroup>

        <div className="Photo-details">
          <p className="Photo-caption"><span className="Photo-caption-user">{user.name}</span> {post.caption}</p>
          <div className="Photo-control">
            <div onClick={() => this.props.increment(index)} className="Photo-button-like button">
              <img src={heart} alt="Likes" className="Photo-button-like-icon"/>
              {post.likes}
            </div>
            <Link className="Photo-button-comments button" to={`/view/${post.code}`}>
              <img src={message} className="Photo-speech-bubble" alt="Comments"/>
              {comments[post.code] ? comments[post.code].length : 0}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;

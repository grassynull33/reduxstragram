import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const { post, index, comments } = this.props;

    return (
      <div className="Photo">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="Photo-photo"/>
        </Link>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <span key={post.likes} className="Photo-likes">{post.likes}</span>
        </ReactCSSTransitionGroup>

        <div className="Photo-details">
          <p className="Photo-caption">{post.caption}</p>
          <div className="Photo-control">
            <button onClick={() => this.props.increment(index)} className="Photo-button-like button">&hearts; {post.likes}</button>
            <Link className="Photo-button-comments button" to={`/view/${post.code}`}>
              <span className="Photo-comments">
                <span className="Photo-speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;

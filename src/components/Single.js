import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actionCreators";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const { id } = this.props.match.params;
    const index = this.props.posts.findIndex(
      post => post.code === id
    );
    const post = this.props.posts[index];
    const postComments = this.props.comments[id] || [];

    return (
      <div className="Single">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);

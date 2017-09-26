import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actionCreators";

import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="PhotoGrid">
        {this.props.posts.map( (post, index) =>
          <Photo {...this.props} key={index} index={index} post={post} />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

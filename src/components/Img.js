import React, { Component } from "react";
import ImageLoader from "react-load-image";

import Loader from "halogen/FadeLoader";

class Img extends Component {
  render() {
    return (
      <ImageLoader src={this.props.source}>
        <img alt={this.props.caption} className="Photo-photo" />
        <div>Error!</div>
        <Loader color="#E4E6C3" />
      </ImageLoader>
    );
  }
}

export default Img;

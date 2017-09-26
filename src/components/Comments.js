import React, { Component } from "react";

class Comments extends Component {
  constructor() {
    super();

    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
           <button className="remove-comment" onClick={() => this.props.removeComment(this.props.match.params.id, index)}>&times;</button>
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    const user = this.refs.user.value;
    const comment = this.refs.comment.value;
    this.props.addComment(id, user, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        <div className="Comments">
          <h3>Comments</h3>
          {this.props.postComments.map(this.renderComment)}
        </div>
        <form ref="commentForm" onSubmit={(event) => this.handleSubmit(event)} className="commentForm">
          <input className="comment-input" type="text" ref="user" placeholder="user" />
          <input className="comment-input" type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;

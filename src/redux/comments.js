function comments(state = [], action) {
  console.log("The comment reducer fired!")
  console.log(state, action);
  return state;
}

export default comments;
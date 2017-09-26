export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}

export function addComment(id, user, comment) {
  return {
    type: "ADD_COMMENT",
    id,
    user,
    comment
  };
}

export function removeComment(id, index) {
  return {
    type: "REMOVE_COMMENT",
    index,
    id
  };
}

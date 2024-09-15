document.getElementById("add-comment").addEventListener("click", function () {
  const commentBox = document.getElementById("new-comment"); //declare the comments variable
  const keepComment = commentBox.value; // store the comments

  //set new comments to the container
  const comments = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = keepComment;
  // add the comments to the container main div
  comments.appendChild(p);

  //clear the text area

  commentBox.value = " ";
});

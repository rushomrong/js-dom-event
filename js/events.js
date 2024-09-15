console.log("This is dom event");

// direct method - must need to know
function MakeRed() {
  document.body.style.backgroundColor = "Red";
}

//another function
const yellowButton = document.getElementById("MakeYellow");
yellowButton.onclick = yellow;

function yellow() {
  document.body.style.backgroundColor = "Yellow";
}

const greenButton = document.getElementById("make-green");
greenButton.onclick = greenBtn;

function greenBtn() {
  document.body.style.backgroundColor = "Green";
}

//most usable functions

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", function pinkColor() {
  document.body.style.backgroundColor = "Pink";
});

// We will use this function every time
document.getElementById("make-purple").addEventListener("click", function () {
  document.body.style.backgroundColor = "Purple";
});

//use of handler :-)
function changeBtn() {
  const changeStatus = document.getElementById("changeText");
  changeStatus.innerText = "Thanks for adding me here! :-) ";
}

// Input text value change with the default text
document.getElementById("updateBtn").addEventListener("click", function () {
  const inputField = document.getElementById("input-text");
  const inputText = inputField.value;

  const text = document.getElementById("default-text");
  text.innerText = inputText;
  inputText.value = "";
});

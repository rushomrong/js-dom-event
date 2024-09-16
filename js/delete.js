//--input style
const inputField = document.getElementById("confirm-delete");
inputField.style.padding = "15px";
inputField.style.color = "red";
inputField.style.fontWeight = "700";
inputField.style.textTransform = "Uppercase";

//--button style
const btnColor = document.getElementById("btn-delete");
btnColor.style.padding = "15px";
btnColor.style.cursor = "pointer";
btnColor.style.textTransform = "Uppercase";
btnColor.style.border = "None";

//--check the input section first
document
  .getElementById("confirm-delete")
  .addEventListener("keyup", function (event) {
    const text = event.target.value; //input text is targeted
    const deleteBtn = document.getElementById("btn-delete"); // button declare
    //-- checking if the text input has delete value or not
    if (text === "delete") {
      deleteBtn.removeAttribute("disabled");
      deleteBtn.style.backgroundColor = "green";
      deleteBtn.style.color = "#fff";
      deleteBtn.style.border = "None";
    } else {
      deleteBtn.setAttribute("disabled", true);
    }

    //apply button condition here
    document
      .getElementById("btn-delete")
      .addEventListener("click", function () {
        const textHide = document.getElementById("hide-text");
        textHide.style.display = "none";
      });
  });

// document.addEventListener("DOMContentLoaded", () => {
// Function: creates a new paragraph and appends it to the buttom of the html
function createPara() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createPara);
}

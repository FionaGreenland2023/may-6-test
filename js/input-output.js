// const textinput = document.getElementById("textinput");
// const heading = document.getElementById("heading");
// const btn = document.getElementById("btn");



// const run = () => {
//     const data = textinput.value
//     heading.innerText = data ;
// } ;


const heading = document.getElementById("heading");
const btn = document.getElementById("btn");

const textInput = document.getElementById("textInput");

const run = () => {
  // input
  const data = textInput.value;

  // output
  heading.innerText = data;
  textInput.value = null;
};

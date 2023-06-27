//imge switcher code
const myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/untitled-1.png"){
    myImage.setAttribute("src" , "images/firefox2.png");
  } else {
  myImage.setAttribute("src" , "images/untitled-1.png")
  }
};

//personalised welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt("PLEASE ENTER YOUR NAME");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name" , myName);
  myHeading.textContent = 'Hello There,' + myName;
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem ("name");
  myHeading.textContent = 'Hello There,' + storedName;
};

myButton.onclick = function() {
  setUserName();
};
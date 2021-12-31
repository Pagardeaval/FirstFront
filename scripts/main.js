let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'annbook is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}


let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'C:\Users\98938\Documents\webproject\test1\images\همسایه.jpg') {
      myImage.setAttribute('src','C:\Users\98938\Documents\webproject\test1\images\همسایه2.jpg');
    } else {
      myImage.setAttribute('src','C:\Users\98938\Documents\webproject\test1\images/همسایه.jpg');
    }
}

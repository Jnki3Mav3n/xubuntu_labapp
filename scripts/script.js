function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

/* 
document.querySelector('html').onclick = function() {
    alert('Wassup mthfkrs!!');
}
*/

let myImage = document.querySelector('img');;

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '/images/samurai-warrior.webp') {
        myImage.setAttribute('src', '/images/ninja-warrior-onmyouji.jpg');
    } else {
        myImage.setAttribute('src', '/images/samurai-warrior.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bushido is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bushido is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
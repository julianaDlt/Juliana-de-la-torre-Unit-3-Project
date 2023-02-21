let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let storyOpening = document.querySelector(".story-opening");
let screenOne = document.querySelector(".option-one-screen");
let screenTwo = document.querySelector(".option-two-screen");
let buttonS = document.querySelector(".startover");
let screenThree = document.querySelector(".option-one-screen");
let buttonF = document.querySelector(".flaslight");
let screenFour = document.querySelector(".option-one-end");
let buttonR = document.querySelector(".runoff");
let screenFive = document.querySelector(".option-two-end");
let buttonSR = document.querySelector(".startover2");
let buttonSA = document.querySelector(".startover2");

buttonOne.onclick = function() {
    screenOne.style.display = "block";
};

buttonTwo.onclick = function() {
    screenTwo.style.display = "block";
};

buttonS.onclick = function() {
    screenTwo.style.display = "none";
};

buttonF.onclick = function() {
    screenFour.style.display = "block";
};

buttonR.onclick = function() {
    screenFive.style.display = "block";
};

buttonSR.onclick = function() {
    screenThree.style.display = "none";
    screenFive.style.display = "none";

};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
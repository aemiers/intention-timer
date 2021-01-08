//  ~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var taskInput = document.querySelector('.task-input');
var minuteInput = document.querySelector('.minute-input');
var secondInput = document.querySelector('.second-input');
var startActivityBtn = document.querySelector('.go-button');
var form = document.querySelector('.activity-form');
var currentActivity = document.querySelector('.current-activity');

//  ~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~
// studyBtn.addEventListener('onclick', changeStudyButtonColor);

// studyBtn.addEventListener('click', function(event) {
//   changeStudyColor();
// });

// button, activeClassName, imageClassNameOne, imageClassNameTwo
// meditateBtn.addEventListener('click', changeImage);
// exerciseBtn.addEventListener('click', changeImage);
// startActivityBtn.addEventListener('click', startActivity);

//  ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~

//  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~

function toggleHidden(elementOne, elementTwo) {
 elementOne.classList.add('hidden');
 elementTwo.classList.remove('hidden');
}

function addHidden(className) {
  document.querySelector(className).classList.add("hidden");
}

function removeHidden(className) {
  document.querySelector(className).classList.remove("hidden");
}

// function changeButtonColor(button, activeClassName, imageClassNameOne, imageClassNameTwo) {
//   event.preventDefault();
//   if (event.target.id === button) {
//     event.target.classList.add(activeClassName);
//     removeHidden(imageClassNameOne);
//     addHidden(imageClassNameTwo);
//   }
// }
//
// function changeStudyColor() {
//   changeButtonColor(studyBtn, "studyBtnActive", ".studyBtnClassOne", ".studyBtnClassTwo");
// }


// function changeStudyButtonColor() {
//   event.preventDefault();
//   if (event.target.id === "studyBtn") {
//     event.target.classList.add("studyBtnActive");
//     removeHidden(".studyBtnClassTwo");
//     addHidden(".studyBtnClassOne")
//   }
// }

studyBtn.addEventListener('click', function(event) {
  changeStudyColor();
})

meditateBtn.addEventListener('click', function(event) {
  changeMeditateColor();
})

exerciseBtn.addEventListener('click', function(event) {
  changeExerciseColor();
})

function changeStudyColor() {
  event.preventDefault(event);
  if (event.target.id === "studyBtn") {
    event.target.classList.add("studyBtnActive");
    addHidden(".studyBtnClassOne");
    removeHidden(".studyBtnClassTwo");
  }
}

function changeMeditateColor() {
  event.preventDefault(event);
  if (event.target.id === "meditateBtn") {
    event.target.classList.add("meditateBtnActive");
    addHidden(".meditateBtnClassOne");
    removeHidden(".meditateBtnClassTwo");
  }
}

function changeExerciseColor() {
  event.preventDefault(event);
  if (event.target.id === "exerciseBtn") {
    event.target.classList.add("exerciseBtnActive");
    addHidden(".exerciseBtnClassOne");
    removeHidden(".exerciseBtnClassTwo");
  }
}

// studyBtn.addEventListener('click', function(event){
//   changeStudyColor(button, btnActive, btnClassOne, btnClassTwo);
// });
//
// function changeColor(button, btnActive, btnClassOne, btnClassTwo) {
//   event.preventDefault();
//   if (event.target.id === button) {
//     event.target.classList.add(btnActive);
//     addHidden(btnClassOne);
//     removeHidden(btnClassTwo);
//   }
// }
//
// function changeStudyColor() {
//   changeColor('click', "studyBtn", "studyBtnActive", ".studyBtnClassTwo", ".studyBtnClassOne");
// }

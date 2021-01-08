//  ~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~
var studyBtn = document.querySelector('#studyBtn');
var meditateBtn = document.querySelector('#meditateBtn');
var exerciseBtn = document.querySelector('#exerciseBtn');
var taskInput = document.querySelector('.task-input');
var minuteInput = document.querySelector('.minute-input');
var secondInput = document.querySelector('.second-input');
var startActivityBtn = document.querySelector('.go-button');
var form = document.querySelector('.activity-form');
var currentActivity = document.querySelector('.current-activity-form');
var taskInput = document.querySelector('.task-input');
var newActivityInput = document.querySelector('.new-task-input');
var minuteDisplay = document.querySelector('.min-display');
var secondDisplay = document.querySelector('.sec-display');
var timerDisplay = document.querySelector('span');
var startTimerBtn = document.querySelector('.start-button');

// //  ~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~

studyBtn.addEventListener('click', function(event) {
  changeStudyColor();
})
meditateBtn.addEventListener('click', function(event) {
  changeMeditateColor();
})
exerciseBtn.addEventListener('click', function(event) {
  changeExerciseColor();
})
startActivityBtn.addEventListener('click', startActivity);
startTimerBtn.addEventListener('click', startTimer);

// // //  ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~
var currentActivity;
var pastActivity;

// // //  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~
// // function toggleHidden(elementOne, elementTwo) {
// //  elementOne.classList.add('hidden');
// //  elementTwo.classList.remove('hidden');
// // }
// //
// // function addHidden(className) {
// //   document.querySelector(className).classList.add("hidden");
// // }
// //
// // function removeHidden(className) {
// //   document.querySelector(className).classList.remove("hidden");
// // }
// //
// // function changeStudyColor() {
// //   event.preventDefault(event);
// //   if (event.target.id === "studyBtn") {
// //     event.target.classList.add("studyBtnActive");
// //     addHidden(".studyBtnClassOne");
// //     removeHidden(".studyBtnClassTwo");
// //     // currentActivity.category = 'study';
// //   }
// // }
// //
// // function changeMeditateColor() {
// //   event.preventDefault(event);
// //   if (event.target.id === "meditateBtn") {
// //     event.target.classList.add("meditateBtnActive");
// //     addHidden(".meditateBtnClassOne");
// //     removeHidden(".meditateBtnClassTwo");
// //     currentActivity.category = 'meditate';
// //   }
// // }
// //
// // function changeExerciseColor() {
// //   event.preventDefault(event);
// //   if (event.target.id === "exerciseBtn") {
// //     event.target.classList.add("exerciseBtnActive");
// //     addHidden(".exerciseBtnClassOne");
// //     removeHidden(".exerciseBtnClassTwo");
// //     currentActivity.category = 'exercise';
// //   }
// // }
//
//  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~
function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}

function timerColorizer() {
  if (studyBtn.classList.includes('studyBtnActive')){
    startTimerBtn.classList.add('study');
  } else if (meditateBtn.classList.includes('meditateBtnActive')) {
     startTimerBtn.classList.add('meditate');
  } else if (exerciseBtn.classList.includes('exerciseBtnActive')){
     startTimerBtn.classList.add('exercise');
  } else {
    displayError();
  }
}

function createNewActivity() {
  category =
  description = taskInput.value;
  minutes = minuteInput.value;
  seconds = secondInput.value;
  completed = false;
  activity = new Activity(category, description, minutes, seconds, completed);
}

function startActivity() {
  newActivityInput.innerText = taskInput.value;
  createNewActivity()
  addHidden(form);
  removeHidden(currentActivity);
  showTimer();
  timerColorizer();
}

function showTimer() {
  // var minutes = parseInt(minuteInput.value) < 10 ? "0" + minutes : minutes;
  // var seconds = parseInt(secondInput.value) < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = `<span id="time">${minuteInput.value}:${secondInput.value}</span><br />`;
}

function timer(newTime, display) {
    var timer = newTime, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function startTimer() {
  event.preventDefault(event);
    var newTime = (60 * parseInt(minuteInput.value)) + parseInt(secondInput.value);
        display = document.querySelector('#time');
    timer(newTime, display);
};

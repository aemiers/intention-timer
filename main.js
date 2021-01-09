//  ~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~
var studyBtn = document.querySelector('#study');
var meditateBtn = document.querySelector('#meditate');
var exerciseBtn = document.querySelector('#exercise');
var toggleButtonContainer = document.querySelector('.button-container')


var studyIconInactive = document.querySelector("#study-icon-inactive");
var meditateIconInactive = document.querySelector("#meditate-icon-inactive");
var exerciseIconInactive = document.querySelector("#exercise-icon-inactive");

var studyIconActive = document.querySelector("#study-icon-active");
var meditateIconActive = document.querySelector("#meditate-icon-active");
var exerciseIconActive = document.querySelector("#exercise-icon-active");

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

toggleButtonContainer.addEventListener('click', function(event) {
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


// studyBtn.addEventListener('click', function(event) {
//   changeStudyColor('studyBtn', 'studyBtnActive', studyIconInactive, studyIconActive);
// })
//
// function changeStudyColor(buttonId, classListActive, inactive, active) {
//   event.preventDefault(event);
//   if (event.target.id === buttonId) {
//     event.target.classList.add(classListActive);
//     toggleHidden(inactive, active);
//   }
// }



// // //  ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~
var currentActivity;
var pastActivity;

//  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~
function toggleHidden(elementOne, elementTwo) {
 elementOne.classList.toggle('hidden');
 elementTwo.classList.toggle('hidden');
}

function addHidden(element) {
  element.classList.add("hidden");
}

function removeHidden(element) {
  element.classList.remove("hidden");
}

  function changeStudyColor() {
    if (studyBtn.checked) {
      addHidden(studyIconInactive);
      removeHidden(studyIconActive);
    } else if (!studyBtn.checked) {
      removeHidden(studyIconInactive);
      addHidden(studyIconActive);
    } else if (meditateBtn.checked) {
      addHidden(meditateIconInactive);
      removeHidden(meditateIconActive);
    } else if (!meditateBtn.checked) {
      removeHidden(meditateIconInactive);
      addHidden(meditateIconActive);
    }

}

// function changeMeditateColor() {
//     addHidden(meditateIconInactive);
//     removeHidden(meditateIconActive);
//   }
//
// function changeExerciseColor() {
//     addHidden(exerciseIconInactive);
//     removeHidden(exerciseIconActive);
//   }


function timerColorizer() {
  if (studyBtn.classList.contains('studyBtnActive')){
    startTimerBtn.classList.add('study');
  } else if (meditateBtn.classList.contains('meditateBtnActive')) {
     startTimerBtn.classList.add('meditate');
  } else if (exerciseBtn.classList.contains('exerciseBtnActive')){
     startTimerBtn.classList.add('exercise');
  } else {
    displayError();
  }
}

function createNewActivity() {
  category = ""
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
  if (minuteInput.value < 10) {
    minuteInput.value = `0${minuteInput.value}`
  }
  if (secondInput.value < 10) {
    secondInput.value = `0${secondInput.value}`
  }
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
            timer = 0;
        }
    }, 1000);
}

function startTimer() {
  event.preventDefault(event);
    var newTime = (60 * parseInt(minuteInput.value)) + parseInt(secondInput.value);
        display = document.querySelector('#time');
    timer(newTime, display);
    startTimerBtn.classList.add('disabled')
};

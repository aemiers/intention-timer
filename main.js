//  ~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~
var studyBtn = document.querySelector('#study');
var meditateBtn = document.querySelector('#meditate');
var exerciseBtn = document.querySelector('#exercise');
var toggleButtonContainer = document.querySelector('.button-container')

var studyIconInactive = document.querySelector('#study-icon-inactive');
var meditateIconInactive = document.querySelector('#meditate-icon-inactive');
var exerciseIconInactive = document.querySelector('#exercise-icon-inactive');

var studyIconActive = document.querySelector('#study-icon-active');
var meditateIconActive = document.querySelector('#meditate-icon-active');
var exerciseIconActive = document.querySelector('#exercise-icon-active');
var taskInput = document.querySelector('.task-input');
var minuteInput = document.querySelector('.minute-input');
var secondInput = document.querySelector('.second-input');

var startActivityBtn = document.querySelector('.go-button');
var currentActivityForm = document.querySelector('.current-activity-form');
var form = document.querySelector('.activity-form');
var taskInput = document.querySelector('.task-input');
var newActivityInput = document.querySelector('.new-task-input');

var minuteDisplay = document.querySelector('.min-display');
var secondDisplay = document.querySelector('.sec-display');
var timerDisplay = document.querySelector('h4');
var startTimerBtn = document.querySelector('.start-button');
var numberInputs = document.querySelectorAll('input[type=number]');

var categoryError = document.querySelector('#category-error');
var descriptionError = document.querySelector('#description-error');
var minutesError = document.querySelector('#minutes-error');
var secondsError = document.querySelector('#seconds-error');

// //  ~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~

toggleButtonContainer.addEventListener('click', function(event) {
  changeIconColors();
})

startActivityBtn.addEventListener('click', startActivity);
startTimerBtn.addEventListener('click', startTimer);

for (var i = 0; i < numberInputs.length; i++) {
  numberInputs[i].addEventListener('keydown', preventKeys);
}
// numberInputs.addEventListener('keydown', preventKeys);
// // //  ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~
var currentActivity;
var pastActivity;

//  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~
function toggleHidden(elementOne, elementTwo) {
 elementOne.classList.toggle('hidden');
 elementTwo.classList.toggle('hidden');
}

function addHidden(element) {
  element.classList.add('hidden');
}

function removeHidden(element) {
  element.classList.remove('hidden');
}

function removeHide(element) {
  element.classList.remove('hide');
}

function addHide(element) {
  element.classList.add('hide');
}

function iconDisplayHandler(iconOneA, iconTwoA, iconThreeA, iconOneB, iconTwoB, iconThreeB) {
  addHidden(iconOneA);
  addHidden(iconTwoA);
  addHidden(iconThreeA);
  removeHidden(iconOneB);
  removeHidden(iconTwoB);
  removeHidden(iconThreeB);
}

function changeIconColors() {
  if (studyBtn.checked) {
    iconDisplayHandler(studyIconInactive, meditateIconActive, exerciseIconActive, studyIconActive, meditateIconInactive, exerciseIconInactive);
  } else if (meditateBtn.checked) {
    iconDisplayHandler(studyIconActive, meditateIconInactive, exerciseIconActive, studyIconInactive, meditateIconActive, exerciseIconInactive);
  } else if (exerciseBtn.checked) {
    iconDisplayHandler(studyIconActive, meditateIconActive, exerciseIconInactive, studyIconInactive, meditateIconInactive, exerciseIconActive);
  }
}

function preventKeys() {
  var invalidChars = ['-', '+', 'e'];
  for (var i = 0; i < numberInputs.length; i++) {
    numberInputs[i].addEventListener('keypress', function(event) {
      if (invalidChars.includes(event.key)) {
        event.preventDefault();
      }
    });
  }
}

function displayCategoryError() {
  if(!studyBtn.checked && !meditateBtn.checked && !exerciseBtn.checked){
    removeHide(categoryError);
    return false;
  } else {
    addHide(categoryError);
    return true;
  }
}

function displayError(sectionInput, error) {
  if(sectionInput.value === ''){
    removeHide(error);
    return false;
  } else {
    addHide(error);
    return true;
  }
}

function allErrors() {
  displayCategoryError();
  displayError(taskInput, descriptionError);
  displayError(minuteInput, minutesError);
  displayError(secondInput, secondsError);
}

function startActivity() {
  allErrors();
  if(displayCategoryError() === true && displayError(taskInput, descriptionError) === true && displayError(minuteInput, minutesError) === true && displayError(secondInput, secondsError) === true) {
    newActivityInput.innerText = taskInput.value;
    createNewActivity();
    addHidden(form);
    removeHidden(currentActivityForm);
    showTimer();
    timerColorizer();
  }
}

function findCategory() {
  var categoryName = ''
  for (var i = 0; i < toggleButtonContainer.children.length; i++) {
    if (toggleButtonContainer.children[i].checked === true) {
      categoryName = toggleButtonContainer.children[i].value;
    }
  }
  return categoryName;
}

function createNewActivity() {
  category = findCategory();
  description = taskInput.value;
  minutes = minuteInput.value;
  seconds = secondInput.value;
  completed = false;
  currentActivity = new Activity(category, description, minutes, seconds, completed);
}

function timerColorizer() {
  if (studyBtn.checked){
    startTimerBtn.classList.add('study');
  } else if (meditateBtn.checked) {
     startTimerBtn.classList.add('meditate');
  } else if (exerciseBtn.checked){
     startTimerBtn.classList.add('exercise');
  }
}

function showTimer() {
  if (minuteInput.value < 10 && minuteInput.value.length === 1) {
    minuteInput.value = `0${minuteInput.value}`
  }
  if (secondInput.value < 10 && secondInput.value.length === 1) {
    secondInput.value = `0${secondInput.value}`
  }
  timerDisplay.innerText = `${minuteInput.value}:${secondInput.value}`;
}

function timer(newTime, display) {
    var timer = newTime, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

function convertToMilliseconds() {
  var milliseconds = (parseInt(minuteInput.value) * 60000) + (parseInt(secondInput.value) * 1000) + 1000;
  return milliseconds;
}

function startTimer() {
  event.preventDefault(event);
    var newTime = (60 * parseInt(minuteInput.value)) + parseInt(secondInput.value);
        display = document.querySelector('#time');
    timer(newTime, display);
    startTimerBtn.classList.add('disabled');
    setTimeout(displayAlert, convertToMilliseconds())
};

function displayAlert() {
  console.log('working')
  if (timerDisplay.innerText === '00:00') {
    currentActivity.completed = true;
    startTimerBtn.innerText = 'COMPLETE'
    alert('TIME IS UP!')
  }
}

function saveUserInput() {
  var stringifiedActivity = JSON.stringify(currentActivity);
  localStorage.setItem('savedCurrentActivity', stringifiedActivity);
}

function getCurrentActivityFromStorage() {
  var retrievedObject = localStorage.getItem('savedCurrentActivity');
  var parsedObject = JSON.parse(retrievedObject);
}

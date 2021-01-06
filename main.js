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
studyBtn.addEventListener('click', startActivity);
meditateBtn.addEventListener('click', startActivity);
exerciseBtn.addEventListener('click', startActivity);
startActivityBtn.addEventListener('click', startActivity);

//  ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~

//  ~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~

function startActivity() {
 form.classList.add('hidden');
 currentActivity.classList.remove('hidden');
}

//icon change - if it doesn't have a bug with the onclick in the HTML, leave it. If it does, use below

// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png")
//     {
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
//     }
//     else
//     {
//         document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
//     }

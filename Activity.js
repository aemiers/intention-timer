class Activity {
  constructor (category, description, minutes, seconds, completed){
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
    this.id = Date.now();
  }

  countdown(){

  }

  markComplete(){
    currentActivity.completed = true;
  }

  saveUserInput() {
      var stringifiedPastActivity = JSON.stringify(pastActivity);
      localStorage.setItem('savedPastActivity', stringifiedPastActivity);
  }
}

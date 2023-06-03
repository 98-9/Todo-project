
var name = prompt("Please enter your name:");
var gender = prompt("Please enter your gender (male or female):");
var age = prompt("Please enter your age:");

if (age <= 0) {
    alert("Invalid age!");
  }
  
  var skipMessage = confirm("Do you want to skip the welcoming message?");
  if (gender === "male") {
    alert("Welcome, Mr. " + name + "!");
  } else if (gender === "female") {
    alert("Welcome, Ms. " + name + "!");
  } else {
    alert("Welcome, " + name + "!");
  }
  var answers = [];

  var question1 = prompt("Question 1: Yes or No?");
  answers.push(question1);
  
  var question2 = prompt("Question 2: Yes or No?");
  answers.push(question2);
  
  var question3 = prompt("Question 3: Yes or No?");
  answers.push(question3);
  answers.forEach(function (answer, index) {
    console.log("Answer " + (index + 1) + ": " + answer);
  });
        


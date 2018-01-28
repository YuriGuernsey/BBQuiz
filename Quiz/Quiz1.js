var questions = document.getElementById("questions")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");



function init(){
    answer4.style.visibility = 'visible';
    Question1();


}


//Question 1
function Question1(){

   var Questions = {
    QuestionNum : "Question 1: Which of these, allow you to add Tkinter to the program?",
    Question1Ans : "from tkinter import*",
    Question2Ans : "import tkinter*",
    Question3Ans : "import tkinter from*",
    Question4Ans : "from tkinter import",
    Correct : answer1,
    Wrong : answer2,
    Wrong1 : answer3,
    Wrong2: answer4
   }

    questions.innerHTML = Questions.QuestionNum;
    answer1.innerHTML = Questions.Question1Ans;
    answer2.innerHTML = Questions.Question2Ans;
    answer3.innerHTML = Questions.Question3Ans;
    answer4.innerHTML = Questions.Question4Ans;


   Questions.Correct.onclick = function() {Correct()};
   Questions.Wrong.onclick = function() {Wrong()};
   Questions.Wrong1.onclick = function() {Wrong()};
   Questions.Wrong2.onclick = function() {Wrong()};

    function Correct(){
     console.log("Correct Answer");
     Question2();
    }

    function Wrong(){
        console.log("Wrong Answer");
        window.alert("Wrong Answer");
    }

}


//Question 2
function Question2(){

   var Questions = {
    QuestionNum : "Question 2: How do you keep the window from closing? ",
    Question1Ans : "loop.mainwindow()",
    Question2Ans : "window.mainloop()",
    Question3Ans : "window.keepopen()",
    Question4Ans : "window.loopmain()",
    Correct : answer2,
    Wrong : answer1,
    Wrong1 : answer3,
    Wrong2: answer4
   }

    questions.innerHTML = Questions.QuestionNum;
    answer1.innerHTML = Questions.Question1Ans;
    answer2.innerHTML = Questions.Question2Ans;
    answer3.innerHTML = Questions.Question3Ans;
    answer4.innerHTML = Questions.Question4Ans;


   Questions.Correct.onclick = function() {Correct()};
   Questions.Wrong.onclick = function() {Wrong()};
   Questions.Wrong1.onclick = function() {Wrong()};
   Questions.Wrong2.onclick = function() {Wrong()};

   function Correct(){
        console.log("Correct Answer");
        Question3();
   }

    function Wrong(){
        console.log("Wrong Answer");
        Question1();
        window.alert("Wrong Answer\nYou are going back to Question 1");
    }

}

//Question 3
function Question3(){

   var Questions = {
    QuestionNum : "Question 3: If you want to display some text on the program, what do you type?",
    Question1Ans : "variable name = text='Text you wish to display'",
    Question2Ans : "Label(text='Text you wish to display')",
    Question3Ans : "text='Text you wish to display'",
    Question4Ans : "variable name = Label(window, text='Text you wish to display')",
    Correct : answer4,
    Wrong : answer1,
    Wrong1 : answer2,
    Wrong2: answer3
   }

    questions.innerHTML = Questions.QuestionNum;
    answer1.innerHTML = Questions.Question1Ans;
    answer2.innerHTML = Questions.Question2Ans;
    answer3.innerHTML = Questions.Question3Ans;
    answer4.innerHTML = Questions.Question4Ans;


   Questions.Correct.onclick = function() {Correct()};
   Questions.Wrong.onclick = function() {Wrong()};
   Questions.Wrong1.onclick = function() {Wrong()};
   Questions.Wrong2.onclick = function() {Wrong()};

   function Correct(){
        console.log("Correct Answer");
        Question4();
   }

    function Wrong(){
        console.log("Wrong Answer");
        Question1();
        window.alert("Wrong Answer\nYou are going back to Question 1");
    }

}

//Question 4
function Question4(){

   var Questions = {
    QuestionNum : "Question 4: What do you type after making an element to add it to the program window?",
    Question1Ans : "variable name.display()",
    Question2Ans : "variable name.show()",
    Question3Ans : "variable name.pack(window)",
    Question4Ans : "variable name.pack()",
    Correct : answer4,
    Wrong : answer1,
    Wrong1 : answer2,
    Wrong2: answer3
   }

    questions.innerHTML = Questions.QuestionNum;
    answer1.innerHTML = Questions.Question1Ans;
    answer2.innerHTML = Questions.Question2Ans;
    answer3.innerHTML = Questions.Question3Ans;
    answer4.innerHTML = Questions.Question4Ans;


   Questions.Correct.onclick = function() {Correct()};
   Questions.Wrong.onclick = function() {Wrong()};
   Questions.Wrong1.onclick = function() {Wrong()};
   Questions.Wrong2.onclick = function() {Wrong()};

   function Correct(){
        console.log("Correct Answer");
        Question5();
   }

    function Wrong(){
        console.log("Wrong Answer");
        Question1();
        window.alert("Wrong Answer\nYou are going back to Question 1");
    }

}

//Question 5
function Question5(){

   var Questions = {
    QuestionNum : "Question 5: Which of these describe a Todo List?", //Add Question
    Question1Ans : "A list", // Add Answer
    Question2Ans : "A list of goals", // Add Answer
    Question3Ans : "A list of tasks that need to be completed", // Add Answer
    Question4Ans : "A list of tasks that don't need to be completed", // Add Answer
    Correct : answer3,
    Wrong : answer1,
    Wrong1 : answer2,
    Wrong2: answer4
   }

    questions.innerHTML = Questions.QuestionNum;
    answer1.innerHTML = Questions.Question1Ans;
    answer2.innerHTML = Questions.Question2Ans;
    answer3.innerHTML = Questions.Question3Ans;
    answer4.innerHTML = Questions.Question4Ans;


   Questions.Correct.onclick = function() {Correct()};
   Questions.Wrong.onclick = function() {Wrong()};
   Questions.Wrong1.onclick = function() {Wrong()};
   Questions.Wrong2.onclick = function() {Wrong()};

   function Correct(){
        console.log("Correct Answer");
        endOfQuiz();
   }

    function Wrong(){
        console.log("Wrong Answer");
        Question1();
        window.alert("Wrong Answer\nYou are going back to Question 1");
    }

}

// End of Quiz
function endOfQuiz(){
    questions.innerHTML = "That is the end of the Recap Quiz, Thank you!";
    answer1.innerHTML = "Go to Bitbulb";
    answer2.innerHTML = "Try again";
    answer3.innerHTML = 'See all the quizzes';
    answer4.style.visibility = 'hidden';

   answer1.onclick = function() {Bitbulb()};
   answer2.onclick = function() {restart()};
   answer3.onclick = function() {index()};

   function index(){
    window.open("../index.html");
   }

   function Bitbulb(){
        window.open("https://bitbulb.io");
   }

   function restart(){
        init();
   }
}
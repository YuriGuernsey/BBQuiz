var questions = document.getElementById("questions")
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");



function init(){
    answer4.style.visibility = 'visible';
    Question1();
}


/* Question 1 */
function Question1(){

   var Questions = {
    QuestionNum : "Question 1: What is the capital of Spain?",
    Question1Ans : "Madrid",
    Question2Ans : "Paris",
    Question3Ans : "Barcelona",
    Question4Ans : "Majorca",
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


/* Question 2 */
function Question2(){

   var Questions = {
    QuestionNum : "Question 2: Who was Henry VII's first wife?",
    Question1Ans : "Margeret Howard",
    Question2Ans : "Catherine of Aragon",
    Question3Ans : "Anne Boleyn",
    Question4Ans : "Jane Seymour",
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

/* Question 3 */
function Question3(){

   var Questions = {
    QuestionNum : "Question 3: When did the Cold War end?",
    Question1Ans : "1985",
    Question2Ans : "1889",
    Question3Ans : "1990",
    Question4Ans : "1989",
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
        endOfQuiz();
   }

    function Wrong(){
        console.log("Wrong Answer");
        Question1();
        window.alert("Wrong Answer\nYou are going back to Question 1");
    }

}


/* End of Quiz */
function endOfQuiz(){
    questions.innerHTML = "That is the end of the Recap Quiz, Thank you!";
    answer1.innerHTML = "Take Survey";
    answer2.innerHTML = "Tweet Me";
    answer3.innerHTML = 'Retake Quiz';
    answer4.style.visibility = 'hidden';

   answer1.onclick = function() {Survey()};
   answer2.onclick = function() {Twitter()};
   answer3.onclick = function() {restart()};

   function Twitter(){
    window.open("../index.html");
   }

   function Survey(){
        window.open("https://www.surveymonkey.com/r/BFSY5LZ");
   }

   function restart(){
        init();
   }
}

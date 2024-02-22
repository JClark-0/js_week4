

// --------------  Class 4 Assignment: Homegrown "AI" Chatbot --------------  

/* Consider that in their simplest form, all AI assistants are Question & Answer database querying program. You make a list of questions and their possible answers and when a question is asked, the bot will check against the database and find the matching answer. More complex ones will learn, weigh options, add to the questions list, search for patterns and eventually be able to make connections between answers using fuzzy logic and neural nets and generate more subtle interpretations.

Though you can try to build that yourself in a future assignment, for the purposes of this exercise, let's keep this simple and in context of testing your Object building knowledge.

1. Create a list of questions and their corresponding answers within the object as a property (this can be as an array or questions and answers or a combination of an array or object or something similar).

2. Then create a method (or methods) that checks a question (or word or phrase) you provide as an argument to it and then performs a search/lookup to find the closest matching question to the one asked and return its answer. Think of it like your own text-based Messenger helper/Slackbot/ChatGPT AI Assistant etc.

3. Keep it simple and try not to get too embroiled in the logic, but yes, there will be logic issues you will need to deal with, so start slow and simple and build upon it.

4. Start by building an object that contains all the properties of the AI in it. For illustration, here's some code that uses only arrays and functions to do this. But your solution needs to use the object format (as you did in class with the dice Object):

// in array form:
const qs = [
  ["how are you", "getting better"],
  ["what is your name", "HAL"],
  ["why are you here", "sorry...that question needs pondering"]
  ["what is the meaning on life", "I am pretty sure it's 42"]
 ];

function checkAnswer(q) {
 // logic to loop through and find a match
 for (let o of qs) {
  if (o[0] == q) { // if the first index (the question) matches the argument, then return the 2nd index (answer)
   return o[1];
  }
 }
}

//var question = prompt('Ask your question'); // this prompt you to ask a question from within the console
let question = "what is your name";
let ans = checkAnswer(question);
console.log(ans);




*/



console.log ('Class 4 Assignment: Homegrown "AI" Chatbot\n-------------------------------------------');

let nothing = "Nothing";

class Chatbot {
    constructor(question, answer) { 
        this.question = question;
        this.answer = answer;
    }
    checkAnswer() {
        if (q == this.question){
            return this.answer;
        }
        else {
            return nothing;
        }
        
    }
}

const questions = [
    new Chatbot('How are you?', "I'm doing ok"),
    new Chatbot('Who are you?', "I'm a chatbot"),
    new Chatbot('What is your favourite color?', "I don't have a favourite color, I'm a bot"),
    new Chatbot('What is this for?', "Javascript class assignment"),
];


let q = prompt('Ask away');
let result = nothing;

for (let i = 0; i < questions.length; i++) {
    result = questions[i].checkAnswer(q);
    if (result !== nothing) {
        break; 
    }
}

if (result !== nothing) {
    console.log(result);
} else {
    console.log("I don't have an answer to that question.");
}






// function checkAnswer(q) {
//     // logic to loop through and find a match
//     for (let o of qs) {
//      if (o[0] == q) { // if the first index (the question) matches the argument, then return the 2nd index (answer)
//       return o[1];
//      }
//     }
//    }

// var question = prompt('Ask your question'); // this prompt you to ask a question from within the console
// let questionOne = "what is your name";
// let ans = checkAnswer(questionOne);
// console.log(ans);

/**
 * Example store structure
 */
'use strict'
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: "Where was Bilbo's home?",
      answers: [
        'Bree',
        'Sackville',
        'Hobbitton'
      ],
      correctAnswer: 'Hobbitton'
    },
    {
      question: "Where was Smaug's home?",
      answers: [
        'Mount Doom',
        'Rivendell',
        'Lonely Mountain',
      ],
      correctAnswer: 'Lonely Mountain'
    },
    {
      question: "Where was Galadriel's home?",
      answers: [
        'Rivendell',
        'Lothlorien',
        'Moria',
      ],
      correctAnswer: 'Lonely Mountain'
    },
    {
      question: "Where was Treebeard's home?",
      answers: [
        'Fanghorn Forest',
        'Mirkwood',
        'The Old Forest',
      ],
      correctAnswer: 'Fanghorn Forest'
    },
    {
      question: "Where was Wormtounge's home?",
      answers: [
        'Gondor',
        'Rohan',
        'The Shire',
      ],
      correctAnswer: 'Rohan'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  rank: [
    'Human',
    'Hobbit',
    'Dwarf',
    'Elf',
    'Ranger',
    'Wizard'
  ]
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function createStartButton(){
  $('header').html(`
  <h1>Are you a master of Middle Earth?</h1>
  <button>Start</button`
  );
}
createStartButton();

function generateQuestionPage(){
  //this should create the html for the question page
  $('main').html(` 
    <h1>Question ${STORE.questionNumber+1}</h1>
      <div class="container">${STORE.questions[STORE.questionNumber].question}</div>
      <h2>Answers:</h2>
      <form action="submit" class="answers">
        <input type="radio" id="ans1" name="answer" value="ans1">
        <label for="ans1">${STORE.questions[STORE.questionNumber].answers[0]}</label><br>
        <input type="radio" id="ans2" name="answer" value="ans2">
        <label for="ans2">${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
        <input type="radio" id="ans3" name="answer" value="ans3">
        <label for="ans3">${STORE.questions[STORE.questionNumber].answers[2]}</label><br>
        <button type="submit">Submit</button>
      </form>`
  );}

function hideHeader(){
  $('header').toggleClass('hidden');
}

function createFooter(){
  $('body').append(`
    <footer>
      You have answered ${score} questions correctly<br>
      Your rank is ${SCORE.rank[score]}!
    </footer>
  `);
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
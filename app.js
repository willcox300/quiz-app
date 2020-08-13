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
      correctAnswer: 'Lothlorien'
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
  <div class="centerButton">
    <button id="start">Start</button>
  </div>`
  );
}
createStartButton();

function generateQuestionPage(){
  //this should create the html for the question page
  $('main').html(` 
    <h2 class="element">Question ${STORE.questionNumber+1} of 5</h2>
    <h3>Your score is ${STORE.score} correct out of 5<br><br>
    Your rank so far is ${STORE.rank[STORE.score]}</h3>  
    <div class="container element">${STORE.questions[STORE.questionNumber].question}</div>
      <h2 class="element">Answers:</h2>
      <form action="submit" class="answers">
        <div class="formAlign">
          <div class="innerDiv">
            <input type="radio" id="ans1" name="answers" value="${STORE.questions[STORE.questionNumber].answers[0]}" required="required">
            <label for="ans1">${STORE.questions[STORE.questionNumber].answers[0]}</label><br>
          </div>
          <div class="innerDiv">
            <input type="radio" id="ans2" name="answers" value="${STORE.questions[STORE.questionNumber].answers[1]}">
            <label for="ans2">${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
          </div>
          <div class="innerDiv">
            <input type="radio" id="ans3" name="answers" value="${STORE.questions[STORE.questionNumber].answers[2]}">
            <label for="ans3">${STORE.questions[STORE.questionNumber].answers[2]}</label><br>
          </div>
        </div>
        <div class="centerButton">
          <button type="submit">Submit</button>
        </div>
      </form>`
  );}

function hideHeader(){
  $('header').toggleClass('hidden');
}

function createResultsPage(){
  $('main').html(`
    <div >
      <p id="p2">You have answered ${STORE.score} out of 5 questions correctly,<br><br>
      Your final rank is ${STORE.rank[STORE.score]}!</p>
    </div>
    <div class="centerButton">
      <button id="tryAgain">Try Again!</button>
    </div>`);
}

function checkAnswer(){
  let answer=$('input[name=answers]:checked').val();
  console.log(answer);
  if(STORE.questions[STORE.questionNumber].correctAnswer == answer){
    STORE.score++;
    $('main').html(`
      <p id="correct">That's correct!</p>
      <div class="centerButton">  
        <button id="next">Next Question</button>
      </div>`);   
  } else{
    $('main').html(`
      <p id="notCorrect">Sorry, that's not correct.<br><br>
      The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}.</p>
      <div class="centerButton">  
        <button id="next">Next Question</button>
      </div>`);   
  }
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

$('header').on('click', 'button', function(){
  hideHeader();
  generateQuestionPage();
  });

$('main').on('submit', 'form', function(event){
  event.preventDefault();
  checkAnswer();
  console.log(STORE.score);
});

$('main').on('click', '#next', function(){
  if(STORE.questionNumber<STORE.questions.length-1){
    STORE.questionNumber++;
    generateQuestionPage();
  } else{
    createResultsPage();
  }
});

$('main').on('click', '#tryAgain', function(){
  console.log('debug');
  location.reload();
})

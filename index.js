function JeopardyQuestions (text, answer, category, value) {
  this.text = text;
  this.answer = answer;
  this.category = category;
  this.value = value;


this.displayCategory = function () {
  let source = document.querySelector('#categories').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(this);
  document.querySelector('#categoryOnly').insertAdjacentHTML('beforeend', html);
  document.querySelector('#categoryOnly .catSelection:last-of-type .cat').addEventListener('click', this.displayQuestion.bind(this));
}

this.displayQuestion = function () {
  //document.getElementById("categories").style.visibilty = "hidden";
  console.log(this);
  let test1 = document.querySelector('#categoryOnly');
  test1.style.visibility = 'hidden';
  let source = document.querySelector('#questions').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(this);
  document.querySelector('#questionOnly').insertAdjacentHTML('beforeend', html);
  document.querySelector('#questionOnly .questionSelection:last-of-type #submit').addEventListener('click', this.isCorrect.bind(this));
}


this.isCorrect = function (event) {
  let space = document.getElementById("text").value;
  let li = event.target;
  let answerSpace = li.nextElementSibling;
  let newQuestion = document.querySelector('#new');
  let scoreSpace = document.querySelector('.yourScore');
  let questionValue = this.value;
  newQuestion.addEventListener('click', refreshGame);
  if (space === this.answer) {
    answerSpace.textContent = "Correct";
    score += questionValue;
    scoreSpace.textContent = score;
    //console.log(typeof(scoreSpace));
  } else {
    answerSpace.textContent = "Incorrect";
    score -= questionValue;
    scoreSpace.textContent = score;
    }
  }
}

let score = 0;

function refreshGame() {
  let a = document.querySelector('#categoryOnly');
  a.innerHTML = "";
  a.style.visibility = "visible";
  let b = document.querySelector('#questionOnly');
  b.innerHTML = "";
  fetch('http://jservice.io/api/random?count=3')
  .then(response => response.json())
  .then(getCategoriesFromAPI)
  .then(displayQuestion)
}

refreshGame();


function getCategoriesFromAPI (object) {
  return object.map(function (object) {
  return newQuestion = new JeopardyQuestions(object.question, object.answer, object.category.title, object.value)
})
}


function displayQuestion (arr) {
  arr.forEach(question => question.displayCategory());
}

function MultipleChoiceQuestion (text, answer, category, value) {
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
  let newQuestion1 = document.querySelector('#new');
  console.log('test');
  if (space === this.answer) {
    answerSpace.textContent = "Correct";
  } else {
    answerSpace.textContent = "Incorrect";
  }
}



}




fetch('http://jservice.io/api/random?count=3')
.then(response => response.json())
.then(getCategoriesFromAPI)
.then(displayQuestion)


function getCategoriesFromAPI (object) {
  return object.map(function (object) {
  return newQuestion = new MultipleChoiceQuestion(object.question, object.answer, object.category.title, object.value)
})
}




function displayQuestion (arr) {
  arr.forEach(question => question.displayCategory()); //running display from line 38
}


  // let score = 100;
  //
  //   MultipleChoiceQuestion.prototype.isCorrect = function (event) {
  //     let li = event.target;
  //     let answerSpace = li.parentElement.nextElementSibling;
  //     let scorespace = document.querySelector('.yourScore');
  //     if (li.textContent === this.answer) {
  //       answerSpace.textContent = "Correct";
  //       scorespace.textContent = score;
  //     } else {
  //       answerSpace.textContent = "Wrong";
  //       score -= 10;
  //       scorespace.textContent = score;
  //     }
  //   }

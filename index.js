

let objectBuffer = {}; //


fetch('http://jservice.io/api/random')
.then(response => response.json())
.then(arr => arr[0])
.then(displayQuestion)



function displayQuestion (object) {
  console.log(object);
  objectBuffer = object;
  let source = document.querySelector('#shortAnswer').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(object);
  document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
  document.querySelector('#submit').addEventListener('click', isCorrect);
}

let score = 0;

function isCorrect (event) {
  let space = document.getElementById("text").value;
  let li = event.target;
  let scorespace = document.querySelector('.yourScore');
  let answerSpace = li.nextElementSibling;
  if (space === objectBuffer.answer) {
    answerSpace.textContent = "Correct";
    scorespace.textContent = score + 10;
  } else {
    answerSpace.textContent = "Incorrect";
    scorespace.textContent = score - 10;
  }
}

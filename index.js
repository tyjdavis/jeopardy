
let objectBuffer = {}; //


fetch('http://jservice.io/api/random?count=3')
.then(response => response.json())
.then(displayQuestion)



function displayQuestion (arr) {
  let display = arr.map((object) => {
    objectBuffer = object;
    let source = document.querySelector('#shortAnswer').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(object);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#submit').addEventListener('click', isCorrect);
    console.log(objectBuffer);
  })
  return display;
  //Promise.all(display).then(isCorrect);
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

let test1 = document.querySelector('.catSelection')
test1.addEventListener('click', clickCategory);

function clickCategory () {
  console.log("test");
}

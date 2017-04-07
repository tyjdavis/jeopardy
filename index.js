
let objectBuffer = {}; //


fetch('http://jservice.io/api/random?count=3')
.then(response => response.json())
.then(displayCategory)
//.then(displayQuestion)
//.then(clickEvent)


function displayCategory (arr) {
  return arr.map((object) => {
    objectBuffer = object;
    let source = document.querySelector('#categories').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(object);
    document.querySelector('#categoryOnly').insertAdjacentHTML('beforeend', html);
    document.querySelector('.catSelection').addEventListener('click', displayQuestion);
  })
}


function displayQuestion () {
    let source = document.querySelector('#questions').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(source);
    document.querySelector('#questionOnly').insertAdjacentHTML('beforeend', html);
    //document.querySelector('#submit').addEventListener('click', isCorrect);
    //console.log(source);
}
//
// let score = 0;
//
// function isCorrect (event) {
//   let space = document.getElementById("text").value;
//   let li = event.target;
//   let scorespace = document.querySelector('.yourScore');
//   let answerSpace = li.nextElementSibling;
//   if (space === objectBuffer.answer) {
//     answerSpace.textContent = "Correct";
//     scorespace.textContent = score + 10;
//   } else {
//     answerSpace.textContent = "Incorrect";
//     scorespace.textContent = score - 10;
//   }
// }
//
//
// function clickEvent (){
// document.querySelector('.catSelection').addEventListener('click', clickCategory);
// }
//

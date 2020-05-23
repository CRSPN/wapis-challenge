var answerBtnA = document.getElementById("answer-a");
var answerBtnB = document.getElementById("answer-b");
var answerBtnC = document.getElementById("answer-c");
var answerBtnD = document.getElementById("answer-d");

//loop the array(s)? of answer buttons and Qs?

//math.random to shuffle the order of the Ans btns


//var timerPromt = alert("This is a timed quiz, timer= +time if correct/-time if incorrect ");





 

var questions = [
    { q: 'Wrapping content in a container div element will do what?', a: [
        {text:"sync and bundle all that content together",isCorrect:true},
        {text:"activate the self destruct sequence", isCorrect:false},
        {text:"hide everything in the div element", isCorrect:false},
        {text:"give all your info to the north pole", isCorrect:false},
        
    ]},
    { q: 'a new DOM element property called innerHTML that works a lot like the textContent property, but with one big difference', a: [
        {text:"the textContent property only accepts text content values",isCorrect:true},
        {text:"all elements are turned to spanish", isCorrect:false},
        {text:"there is no diffirence", isCorrect:false},
        {text:"the innerHTML will turn anyone who looks at it to stone", isCorrect:false},
        
    ]},
    { q: '', a: [
        {text:"button 1",isCorrect:false},
        {text:"button 2", isCorrect:false},
        {text:"button 3", isCorrect:true},
        {text:"button 4", isCorrect:false},
        
    ]},
    { q: 'Wrapping content in a container div element will do what?', a: [
        {text:"button 1",isCorrect:false},
        {text:"button 2", isCorrect:true},
        {text:"button 3", isCorrect:false},
        {text:"button 4", isCorrect:false},
        
    ]},
] 
answerBtnA.innerHTML = questions[0].a[0].text
answerBtnB.innerHTML = questions[0].a[1].text
answerBtnC.innerHTML = questions[0].a[2].text
answerBtnD.innerHTML = questions[0].a[3].text

var quizStart = function(questions) {
   if(a === true) {
       //add time

   }
    

}

questions.addEventListener("click", quizStart);

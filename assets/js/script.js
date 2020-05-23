var answerBtnA = document.getElementById("answer-a")
var answerBtnB = document.getElementById("answer-b")
var answerBtnC = document.getElementById("answer-c")
var answerBtnD = document.getElementById("answer-d")

//loop the array(s)? of answer buttons and Qs?

//math.random to shuffle the order of the Ans btns


answerBtnA.innerHTML = questions[0].a[0].text
answerBtnB.innerHTML = questions[0].a[1].text
answerBtnC.innerHTML = questions[0].a[2].text
answerBtnD.innerHTML = questions[0].a[3].text
 

var questions = [
    { q: 'Wrapping content in a container div element will do what?', a: [
        {text:"button 1",isCorrect:true},
        {text:"button 2", isCorrect:false},
        {text:"button 3", isCorrect:false},
        {text:"button 4", isCorrect:false},
        
    ]},
    { q: 'Wrapping content in a container div element will do what?', a: [
        {text:"button 1",isCorrect:true},
        {text:"button 2", isCorrect:false},
        {text:"button 3", isCorrect:false},
        {text:"button 4", isCorrect:false},
        
    ]},
    { q: 'Wrapping content in a container div element will do what?', a: [
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



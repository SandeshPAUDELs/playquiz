const quizData = [
    {
        question: "For what HTML, CSS and JavaScript required for?",
        a: 'For Web development',
        b: 'for simple',
        c: 'They are in demand so',
        d: "none of the above",
        correct: 'a'
    },
    {
        question: "how many heading tags are there in html?",
    a: '1',
    b: '5',
    c: '6',
    d: 'None of above',
    correct: 'c',
},
    {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: 'Where is let and const introduced in javascript?',
    a: 'In Es6',
    b: 'In heading',
    c: 'let for suppose task and const for const function same as in c language',
    d: 'None of the above',
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length; // Total questions
let questionBox = document.getElementById("questionBox"); // Yeslan question display garxa
let allInputs = document.querySelectorAll("input[type='radio']") // options haru ko lagi
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
} // load question function chai yeuta questioni sakkiye paxi aarko aaune logic lagauna
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3> You have completed Quiz and scored, ${correct} / ${total} </h3>
        
    </div>
`
}
loadQuestion(index);
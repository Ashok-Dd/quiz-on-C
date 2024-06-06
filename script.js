const questionPaper =[
    {
        question:"Which keyword is used to prevent any changes in the variable within a C program?",
        a:"immutable",
        b:"mutable",
        c:"const",
        d:"volatile",
        correct:"c"

        
    },
    {
        question:"Which of the following typecasting is accepted by C language?",
        a:"Widening & Narrowing conversions",
        b:"Widening conversions",
        c:"Narrowing conversion",
        d:"None",
        correct:"a"

        
    },
    {
        question:"Functions can return enumeration constants in C?",
        a:"depends on the compiler",
        b:"depends on the standard",
        c:"True",
        d:"False",
        correct:"c"

        
    },
    {
        question:"Functions in C Language are always _________",
        a:"Both Internal and External",
        b:"Internal",
        c:"External",
        d:"External and Internal are not valid terms for functions",
        correct:"c"

        
    },
    {
        question:"Which of following is not accepted in C?",
        a:"static a = 10; //static as",
        b:"static static int a; //a static variable prefixed with static",
        c:"static int func (int); //parameter as static",
        d:"All the above",
        correct:"2"

        
    },
    {
        question:"Property which allows to produce different executable for different platforms in C is called?",
        a:"Conditional compilation",
        b:"Selective inclusion",
        c:"File inclusion",
        d:"Recursive macros",
        correct:"a"

        
    },
    {
        question:"Which of the following are C preprocessors?",
        a:"#endif",
        b:"#ifdef",
        c:"#define",
        d:"All the above",
        correct:"d"

        
    },
    {
        question:"Which of the following is true for variable names in C?",
        a:"They can contain alphanumeric characters as well as special characters",
        b:"Variable names cannot start with a digit",
        c:"It is not an error to declare a variable to be one of the keywords",
        d:"Variable can be of any length",
        correct:"b"

        
    },
    {
        question:"Where in C the order of precedence of operators do not exist?",
        a:"Within conditional statements, if, else",
        b:"Within while, do-while",
        c:"Within a macro definition",
        d:"None",
        correct:"d"

        
    },
    {
        question:"What is #include <stdio.h>?",
        a:"Preprocessor directive",
        b:"Inclusion directive",
        c:"File inclusion directive",
        d:"None",
        correct:"a"

        
    },
    {
        question:"Which of the following is not a storage class specifier in C?",
        a:"typedef",
        b:"extern",
        c:"volatile",
        d:"static",
        correct:"c"

        
    },
    {
        question:"Which of the following will occur if we call the free() function on a NULL pointer?",
        a:"Compailation error",
        b:"Run time error",
        c:"This program will execute normally",
        d:"Undefined behaviour",
        correct:"c"

        
    },
    {
        question:"Which data structure is used to handle recursion in C?",
        a:"Trees",
        b:"Stack",
        c:"Queue",
        d:"Dequeue",
        correct:"b"

        
    },
    {
        question:"Which of the following is not true about structs in C?",
        a:"Functions are allowed inside structures",
        b:"No data hiding",
        c:"Constructors are not allowed inside structs",
        d:"Cannot have static members in the struct body",
        correct:"a"

        
    },
    {
        question:"Which of the following is the proper syntax for declaring macros in C?",
        a:"#define long long  II",
        b:"#define II",
        c:"#define long lon",
        d:"#define II long long",
        correct:"d"
        
        
    }

];

let qNo=0;
let score=0;
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('ques');
const a_text = document.getElementById('a');
const b_text = document.getElementById('b');
const c_text = document.getElementById('c');
const d_text = document.getElementById('d');
const submitBtn = document.getElementById('submit');
const prevBtn = document.getElementById('prev');
const scoreEl = document.getElementById('score');

loadQuiz();
function loadQuiz(){
    document.getElementById('num').innerHTML=`Question-${qNo+1}`;
    deselectChoices();
    const currentQuizData = questionPaper[qNo];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectChoices() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.checked = false);
}
function getSelected() {
    const choices = document.querySelectorAll('.choice');
    let answer = undefined;
    choices.forEach(choice => {
        if (choice.checked) {
            answer = choice.value;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === questionPaper[qNo].correct) {
            score++;
        }
        qNo++;
        if (qNo < questionPaper.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2 style="margin-top: 26%; text-align:center;">You answered ${score}/${questionPaper.length} questions correctly.</h2>
                
                <button onclick="location.reload()" class="buttons">Restart</button>
            `;
        }
    }
});

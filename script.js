const quizData = [
    {
        question: 'Daenerys’in hangi ejderhası mavi alevler kusarak duvarı yıkmayı başarmıştı?',
        a : 'Turncloak',
        b : 'Viserion',
        c : 'Rhaegal',
        d : 'Drogon',
        correct: 'b'
    },
    {
        question: 'Lord Voldemort’un gücünü kendinde sandığı mürver asa gerçekte en son kime itaat ediyordu?',
        a : 'Draco Malfoy',
        b : 'Severus Snape',
        c : 'Albus Dumbledore',
        d : 'Harry Potter',
        correct : 'd'
    },
    {
        question : 'Hobbitlerin Aragorn ile ilk kez tanıştığı yerin adı hangisidir?',
        a : 'Neşeli Midilli (Joyful Pony)',
        b : 'Dans Eden Midilli (Dancing Pony)',
        c : 'Şahlanan Midilli (Prancing Pony)',
        d : 'Tatlı Midilli (Sweet Pony)',
        correct : 'c'
    },
    {
        question : '"Beşinci günün şafağında doğuya bakın." Gandalf Yüzüklerin Efendisi serisinin hangi filminde bu meşhur repliği söylüyordu?',
        a : 'Yüzük Kardeşliği',
        b : 'İki Kule',
        c : 'Kralın Dönüşü',
        d : 'Hobbit',
        correct : 'b'
    },
    {
        question : 'Star-Lord, Gamora, Drax ve Groot hangi film serisinde yer alan karakterlerdir?',
        a :'Transformers', 
        b :'Fantastik Dörtlü',
        c :'Galaksinin Koruyucuları', 
        d :'Yıldızlararası' ,
        correct : 'c'
    }
]


const answerEls = document.querySelectorAll('.answer');
const quiz= document.getElementById('quiz');
const questionEL = document.getElementById('question');
const  a_text = document.getElementById('a_text'); 
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('btn');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach(answerEls => {
       if(answerEls.checked){
        answer = answerEls.id;
       }
    });

    return answer;
}

    function deselectAnswers() {
        answerEls.forEach((answerEls )=> {
            answerEls.checked = false;
        });

    }





submitBtn.addEventListener("click", () => {

    // check to see the answer
    const answer = getSelected();

    console.log(answer)

    if(answer) {

        if(answer === quizData[currentQuiz].correct){
            score++;
        }


         currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2>Bitirdiiin 🎉🎉  ${score}/${quizData.length}</h2>  
           
           <button onClick="location.reload()">Tekrar Dene</button>`;
        }
    }
});





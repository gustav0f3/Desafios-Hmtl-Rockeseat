const quizData= [
    {
      question: 'Que Rei Teve 28 Filhos E 70 Filhas?',
      a:'Jeoacaz',
      b:'Roboao',
      c:'Saul',
      d:'Amom',
      correct: 'b',
    },{
      question: 'De Que Tribo Era Samuel?',
      a:'Benjamim',
      b:'Efraim',
      c:'Levi',
      d:'Warden',
      correct: 'b',
    },{
      question: 'Quem Derrotou Um Gigante Que Tinha Uma Lança De 6 Quilos?',
      a:'Abisai',
      b:'Davi',
      c:'Samuel',
      d:'Joabe',
      correct: 'a',
    },{
      question: 'Quem Morreu Com Uma Pedrada No Crânio?',
      a:'Abimeleque',
      b:'Ogue',
      c:'Levi',
      d:'Golias',
      correct: 'a',
    },{
      question:'Quantos Filhos Teve Saul?',
      a:'7 Filhos',
      b:'4 Filhos',
      c:'6 Filhos',
      d:'2 Filhos',
      correct: 'b',
    }
  ];
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
      deselectAnswers();
  
      const currentQuizData = quizData[currentQuiz];
  
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
      let answer = undefined;
  
      answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
              answer = answerEl.id;
          }
      });
  
      return answer;
  }
  
  function deselectAnswers() {
      answerEls.forEach((answerEl) => {
          answerEl.checked = false;
      });
  }
  
  submitBtn.addEventListener("click", () => {
      // check to see the answer
      const answer = getSelected();
  
      if (answer) {
          if (answer === quizData[currentQuiz].correct) {
              score++;
          }
  
          currentQuiz++;
          if (currentQuiz < quizData.length) {
              loadQuiz();
          } else {
              quiz.innerHTML = `
                  <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                  
                  <button onclick="location.reload()">Reload</button>
              `;
          }
      }
    });  
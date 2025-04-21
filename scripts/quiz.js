window.addEventListener('DOMContentLoaded', () => {
  const questionContainer = document.querySelector('.quiz-question-container');
  const submitBtn = document.querySelector('.btn-submit');
  const resultPara = document.querySelector('.quiz-result');
  const backBtn = document.querySelector('.btn-back');
  
    const currentQuizIndex = localStorage.getItem('currentQuizIndex');
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quiz = quizzes[currentQuizIndex];
    
    if (!quiz || !quiz.questions) {
        questionContainer.innerHTML = '<p>No quiz data found.</p>';
        submitBtn.style.display = 'none';
        return;
    }

    quiz.questions.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.classList.add('question-block');

        const qTitle = document.createElement('p');
        qTitle.textContent = `Q${index + 1}: ${q.question}`;
        qDiv.appendChild(qTitle);

        q.options.forEach((opt, i) => {
          const label = document.createElement('label');
          label.classList.add('option-label');
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `question${index}`;
          input.value = opt;
          label.appendChild(input);
          label.append(` ${opt}`);
          qDiv.appendChild(label);
          qDiv.appendChild(document.createElement('br'));
 });
 questionContainer.appendChild(qDiv)
});
 
window.submitQuiz = function () {
  let score = 0;

  quiz.questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);

    if (selected && q.answer) {
      const selectedAnswer = selected.value.trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();

      console.log(`Selected: ${selectedAnswer}, Correct: ${correctAnswer}`);

      if (selectedAnswer === correctAnswer) {
        score++;
      }
    } else {
      console.warn(`Missing answer for question ${index + 1}:, q`);
    }
  });

  resultPara.textContent = `You scored ${score} out of ${quiz.questions.length}`;
  backBtn.style.display = 'inline-block';

  const user = localStorage.getItem('loggedInUser');
  if (user && user !== 'admin') {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[user] = scores[user] || {};
    scores[user][quiz.title] = score;
    localStorage.setItem('scores', JSON.stringify(scores));
  }
};;
;

      backBtn.addEventListener('click', () => {
        window.location.href = 'home.html';
      });
})
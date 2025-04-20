window.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.querySelector('.question-container');
    const submitBtn = document.querySelector('.submit-btn');
    const resultPara = document.querySelector('.result');
    const backBtn = document.querySelector('.back-button');
  
    const currentQuizIndex = localStorage.getItem('currentQuizIndex');
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    const quiz = quizzes[currentQuizIndex];
    
    if (!quiz || !quiz.questions) {
        questionContainer.innerHTML = '<p>No quiz data found.</p>';
        submitBtn.style.display = 'none';
        return;
    }
})
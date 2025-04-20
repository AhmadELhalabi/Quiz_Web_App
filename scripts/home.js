window.addEventListener('DOMContentLoaded', () => {
    const quizList = document.getElementById('quizList');
    const userGreeting = document.getElementById('userGreeting');
  
    const user = localStorage.getItem('loggedInUser');
    if (!user || user === 'admin') {
      window.location.href = '../index.html';
      return;
    };
    
    userGreeting.textContent = `Hello, ${user}! Choose a quiz to begin.`;
  
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
  
    if (quizzes.length === 0) {
      quizList.innerHTML = '<li>No quizzes available yet.</li>';
      return;
    }
})
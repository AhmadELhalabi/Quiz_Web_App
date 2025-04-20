window.addEventListener('DOMContentLoaded', () => {
    const quizList = document.getElementById('quizList');
    const userGreeting = document.getElementById('userGreeting');
  
    const user = localStorage.getItem('loggedInUser');
    if (!user || user === 'admin') {
      window.location.href = '../index.html';
      return;
    };

})
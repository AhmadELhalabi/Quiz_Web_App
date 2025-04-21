window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let scores = JSON.parse(localStorage.getItem('scores'));
  
    if (!Array.isArray(scores)) {
      scores = [];
    }
  
    const tableBody = document.getElementById('userScoresBody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const userScores = scores.filter(score => score.username === user.email);
        const scoreText = userScores.length
          ? userScores.map(s => `${s.quizTitle}: ${s.score}`).join(', ')
          : 'No scores yet';
    })
})
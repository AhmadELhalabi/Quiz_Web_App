window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const scores = JSON.parse(localStorage.getItem('scores')) || {};;
  
    const tableBody = document.getElementById('userScoresBody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const userScores = scores[user.email] || null ;
        let scoreText = 'No scores yet';

        if (userScores && typeof userScores === 'object') {
            const entries = Object.entries(userScores);
            if (entries.length > 0) {
              scoreText = entries
                .map(([quizTitle, score]) =>`${quizTitle}: ${score}`)
                .join(', ');
            }
          }
      
          const row = document.createElement('tr');
          row.innerHTML = `
          <td>${user.email}</td>
          <td colspan="2">${scoreText}</td>
      `;
      tableBody.appendChild(row);
    })
})
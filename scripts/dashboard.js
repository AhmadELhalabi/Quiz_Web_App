window.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let scores = JSON.parse(localStorage.getItem('scores'));
  
    if (!Array.isArray(scores)) {
      scores = [];
    }
  
    const tableBody = document.getElementById('userScoresBody');
    tableBody.innerHTML = '';
})
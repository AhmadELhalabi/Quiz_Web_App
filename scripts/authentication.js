// Handles authentication logic for index.html

const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// login / registor form 
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });
  
  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
   
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('User already exists');
      return;
    }
  
    users.push({ email, password, scores: [] });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Registered successfully!');
    registerForm.reset();
  });
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    if (email === 'admin@quiz.com' && password === 'admin123') {
      localStorage.setItem('loggedInUser', 'admin');
      window.location.href = 'pages/dashboard.html';
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      localStorage.setItem('loggedInUser', email);
      window.location.href = 'pages/home.html';
    } else {
      alert('Invalid credentials');
    }
  });
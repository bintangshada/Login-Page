const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const eye = document.getElementById('eye');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const fail = document.getElementById('fail');

const duar = new Audio('./assets/vine-boom.mp3');
const wow = new Audio('./assets/anime-wow-sound-effect.mp3');
const okgas = new Audio('./assets/okgas.mp3');

function moveButton() {
  const x = Math.random() * 300 - 100;
  const y = Math.random() * 400 - 100;
  loginBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function showFail() {
  fail.classList.add('show');
  
  setTimeout(() => {
    fail.classList.remove('show');
  }, 500);
}

eye.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eye.textContent = '👀';
    eye.classList.add('eye-active');
  } else {
    passwordInput.type = 'password';
    eye.textContent = '👁';
    eye.classList.remove('eye-active');
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user !== 'admin' || pass !== '1234') {
    duar.currentTime = 0;
    duar.play();
    message.textContent = "Kamu siapa jir? 😡";
    loginBtn.textContent = "Gak kena wle 😛";
    moveButton();
    showFail();
  } else {
    wow.currentTime = 0;
    wow.play();
    okgas.currentTime = 0;
    okgas.play();
    message.textContent = "OK GAS OK GAS! 🚀";
    loginBtn.textContent = "Lu keren bang! 😎";
    loginBtn.style.transform = "scale(1.1)";
  }
});
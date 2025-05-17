const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const eye = document.getElementById('eye');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const fail = document.getElementById('fail');
const easterEgg = document.querySelector('.easter-egg');
const success = document.getElementById('success');

const duar = new Audio();
duar.src = './assets/vine-boom.mp3';
duar.preload = 'auto';

const wow = new Audio();
wow.src = './assets/anime-wow-sound-effect.mp3';
wow.preload = 'auto';

const okgas = new Audio();
okgas.src = './assets/okgas.mp3';
okgas.preload = 'auto';

function playSound(sound) {
  sound.currentTime = 0;
  
  const playPromise = sound.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log('Audio playback started successfully');
      })
      .catch(error => {
        console.log('Audio playback error:', error);
      });
  }
}

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

function showSuccess(){
  success.classList.add('show');
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
    playSound(duar);
    message.textContent = "Kamu siapa jir? 😡";
    loginBtn.textContent = "Gak kena wle 😛";
    moveButton();
    showFail();
  } else {
    playSound(wow);
    playSound(okgas);
    message.textContent = "OK GAS OK GAS! 🚀";
    loginBtn.textContent = "Lu keren bang! 😎";
    loginBtn.style.transform = "scale(1.1)";
    showSuccess();
  }
});

let konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konami[konamiPosition]) {
    konamiPosition++;
    
    if (konamiPosition === konami.length) {
      showEasterEgg();
      konamiPosition = 0;
    }
  } else {
    konamiPosition = 0;
  }
});

let clickCount = 0;
let clickTimer;
document.querySelector('.login-container h2').addEventListener('click', () => {
  clickCount++;
  
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 1000);
  
  if (clickCount >= 3) {
    showEasterEgg();
    clickCount = 0;
  }
});

function showEasterEgg() {
  easterEgg.classList.add('show');
  
  setTimeout(() => {
    easterEgg.classList.remove('show');
  }, 5000);
}
// script.js

// loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
  
  // scroll reveal
  ScrollReveal().reveal('.fade-in', {
    distance: '50px',
    duration: 1200,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false
  });
  
  // typing effect
  const text = "Passionné par le développement web";
  let index = 0;
  const typingText = document.getElementById("typing-text");
  
  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 70);
    }
  }
  
  // animation mot par mot
  function animateWords() {
    document.querySelectorAll('.word-animate').forEach(section => {
      const words = section.textContent.split(' ');
      section.innerHTML = '';
      words.forEach((word, idx) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.animationDelay = `${idx * 0.1}s`;
        span.style.opacity = '0';
        span.style.animation = 'fadeWord 1s forwards';
        section.appendChild(span);
      });
    });
  }
  
  // particles background
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particlesArray = [];
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.fillStyle = 'rgba(0,123,255,0.2)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function initParticles() {
    for (let i = 0; i < 100; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  function handleParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(handleParticles);
  }
  
  // responsive resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // init
  window.onload = () => {
    type();
    animateWords();
    initParticles();
    handleParticles();
  }
  
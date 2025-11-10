// 🎈 Create balloons dynamically
const balloonContainer = document.querySelector('.balloons');

for (let i = 0; i < 20; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  balloon.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random() * 40 + 320}, 90%, 70%), hsl(${Math.random() * 40 + 320}, 90%, 60%))`;
  balloonContainer.appendChild(balloon);
}

// 🎂 Show cake after 5 seconds
setTimeout(() => {
  document.querySelector('.cake-container').classList.remove('hidden');
}, 5000);

// 💨 Candle click event
document.querySelectorAll('.candle').forEach(candle => {
  candle.addEventListener('click', () => {
    const flame = candle.querySelector('.flame');
    flame.style.opacity = '0';
    flame.style.transition = 'opacity 0.5s ease';

    // Optional smoke effect
    const smoke = document.createElement('div');
    smoke.style.position = 'absolute';
    smoke.style.top = '-10px';
    smoke.style.left = '50%';
    smoke.style.width = '10px';
    smoke.style.height = '10px';
    smoke.style.borderRadius = '50%';
    smoke.style.background = 'rgba(200,200,200,0.6)';
    smoke.style.transform = 'translateX(-50%)';
    smoke.style.animation = 'smoke 1s forwards';
    candle.appendChild(smoke);
  });
});

// Smoke animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes smoke {
  0% { opacity: 0.8; transform: translate(-50%, 0) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -40px) scale(2); }
}`;
document.head.appendChild(style);


document.querySelector('.designer-btn').addEventListener('click', () => {
  alert("🎉 Yay! Let's go to the next surprise!");
});

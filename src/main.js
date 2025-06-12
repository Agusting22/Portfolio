import './style.css'

// Movimiento suave de las pelotitas con el scroll
function lerp(a, b, n) { return a + (b - a) * n; }

const balls = [
  { el: document.getElementById('blur-tl'), dir: -1, tx: 0 },
  { el: document.getElementById('blur-tr'), dir: 1, tx: 0 },
  { el: document.getElementById('blur-bl'), dir: -1, tx: 0 },
  { el: document.getElementById('blur-br'), dir: 1, tx: 0 },
];

function animateBalls() {
  const scrollY = window.scrollY || window.pageYOffset;
  const maxMove = 60; // Máximo desplazamiento en px

  balls.forEach(b => {
    const targetX = b.dir * Math.min(scrollY / 8, maxMove);
    b.tx = lerp(b.tx, targetX, 0.12);
    if (b.el) b.el.style.transform = `translateX(${b.tx}px)`;
  });

  requestAnimationFrame(animateBalls);
}

animateBalls();

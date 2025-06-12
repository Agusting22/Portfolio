// Movimiento suave de las pelotitas con el scroll
function lerp(a, b, n) { return a + (b - a) * n; }

const balls = [
  { el: document.getElementById('blur-tl'), base: {x: 0, y: 0}, dir: {x: 1, y: 1}, tx: 0, ty: 0 },
  { el: document.getElementById('blur-tr'), base: {x: 0, y: 0}, dir: {x: -1, y: 1}, tx: 0, ty: 0 },
  { el: document.getElementById('blur-bl'), base: {x: 0, y: 0}, dir: {x: 1, y: -1}, tx: 0, ty: 0 },
  { el: document.getElementById('blur-br'), base: {x: 0, y: 0}, dir: {x: -1, y: -1}, tx: 0, ty: 0 },
];

function animateBalls() {
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollX = window.scrollX || window.pageXOffset;
  const maxMove = 40; // Máximo desplazamiento en px

  balls.forEach(b => {
    // Calcula destino según dirección y scroll
    const targetX = b.dir.x * (scrollX / 1);
    const targetY = b.dir.y * (scrollY / 100);

    // Interpolación suave
    b.tx = lerp(b.tx, targetX, 0.1);
    b.ty = lerp(b.ty, targetY, 0.1);

    // Limita el movimiento
    const x = Math.max(-maxMove, Math.min(maxMove, b.tx));
    const y = Math.max(-maxMove, Math.min(maxMove, b.ty));

    b.el.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animateBalls);
}

animateBalls();

const container = document.querySelector('.container');

const createDot = () => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  container.appendChild(dot);
  return dot;
};

const dots = [];
for (let i = 0; i < 20; i++) {
  dots.push(createDot());
}

const moveDots = (event) => {
  dots.forEach((dot) => {
    const x = (event.clientX * 0.05) + 'px';
    const y = (event.clientY * 0.05) + 'px';
    dot.style.transform = `translate(${x}, ${y})`;
  });
};

container.addEventListener('mousemove', moveDots);

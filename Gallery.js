window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.gallery-title');
  const grid = document.querySelector('.gallery-grid');
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Animate title and grid
  setTimeout(() => {
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }, 300);

  setTimeout(() => {
    grid.style.opacity = '1';
    grid.style.transform = 'scale(1)';
  }, 800);

  // Arrow controls
  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

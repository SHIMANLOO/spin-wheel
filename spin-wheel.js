const wheel = document.querySelector('.wheel');
const spinbtn = document.querySelector('.spinbtn');

let value = Math.ceil(Math.random() * 3600);

if (!wheel || !spinbtn) {
  console.error('element not found:', { wheel, spinbtn });
} else {
  spinbtn.addEventListener('click', () => {
    wheel.style.transition = 'transform 4s cubic-bezier(.33,1,.68,1)';
    wheel.style.transform = `rotate(${value}deg)`;
    value += Math.ceil(Math.random() * 3600);
  });
}
const button = document.querySelector('.my-button');
const colors = ['#e74c3c', '#f39c12', '#9b59b6', '#2ecc71', '#1abc9c'];
button.addEventListener('mouseenter', function() 
{
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = randomColor;
});
button.addEventListener('mouseleave', function() 
{
  button.style.backgroundColor = '#3498db';
});
const carousel2 = document.querySelector('.carousel2');
const slider2 = document.querySelector('.slider2');

const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
let direction1;

next2.addEventListener('click', function beta() {
  direction1 = -1;
  carousel2.style.justifyContent = 'flex-start';
  slider2.style.transform = 'translate(-20%)';  
});

prev2.addEventListener('click', function beta() {
  if (direction1 === -1) {
    direction1 = 1;
    slider2.appendChild(slider2.firstElementChild);
  }
  carousel2.style.justifyContent = 'flex-end';    
  slider2.style.transform = 'translate(20%)';  
  
});

slider2.addEventListener('transitionend', function beta() {
  // get the last element and append it to the front
  
  if (direction1 === 1) {
    slider2.prepend(slider2.lastElementChild);
  } else {
    slider2.appendChild(slider2.firstElementChild);
  }
  
  slider2.style.transition = 'none';
  slider2.style.transform = 'translate(0)';
  setTimeout(() => {
    slider2.style.transition = 'all 0.5s';
  })
}, false);
document.querySelectorAll('.cartes').forEach(carte => {
  const video = carte.querySelector('video');
  carte.addEventListener('mouseenter', () => video.play());
  carte.addEventListener('mouseleave', () => { 
    video.pause(); 
    video.currentTime = 0; 
  });
});

const header = document.querySelector('header');
const bouton = document.querySelector('.recherche');
const champ = document.querySelector('#recherche');

bouton.addEventListener('click', () => {
  const ouvert = header.classList.toggle('recherche-ouverte');
  if (ouvert) champ.focus();
});
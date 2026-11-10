// --- Gestion des vidéos au survol des cartes ---
document.querySelectorAll('.cartes').forEach(carte => {
  const video = carte.querySelector('video');
  carte.addEventListener('mouseenter', () => video.play());
  carte.addEventListener('mouseleave', () => { 
    video.pause(); 
    video.currentTime = 0; 
  });
});

// --- Gestion de l'ouverture du champ de recherche ---
const header = document.querySelector('header');
const bouton = document.querySelector('.recherche');
const champ = document.querySelector('#recherche');

bouton.addEventListener('click', () => {
  const ouvert = header.classList.toggle('recherche-ouverte');
  if (ouvert) champ.focus();
});

// --- Liste des jeux : suggestions + redirection ---
const jeux = [
  { nom: "Slime Rancher 2", page: "slime-rancher-2.html" },
  { nom: "Cyberpunk 2077", page: "cyberpunk-2077.html" },
  { nom: "Metal Gear Solid", page: "metal-gear-solid.html" },
  { nom: "Monster Hunter Wilds", page: "monster-hunter-wilds.html" },
  { nom: "The Legend of Zelda: Breath of the Wild", page: "zelda-botw.html" }
];

const liste = document.querySelector('#suggestions-jeux');
jeux.forEach(j => liste.append(new Option(j.nom, j.nom)));

document.querySelector('#form-recherche').addEventListener('submit', (e) => {
  e.preventDefault();
  const saisie = champ.value.trim().toLowerCase();
  const jeu = jeux.find(j => saisie && j.nom.toLowerCase().includes(saisie));
  if (jeu) window.location.href = jeu.page;
  else alert("Aucun jeu trouvé pour cette recherche.");
});
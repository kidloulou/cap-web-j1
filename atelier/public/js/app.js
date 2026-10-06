const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');

// Squelette : à l'envoi, on empêche le rechargement de la page et on le dit dans le statut.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  statut.textContent = 'Interface prête.';
});

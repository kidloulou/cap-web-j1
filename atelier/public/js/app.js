const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const champ = document.querySelector('#message');
const boutonsDeQuestions = document.querySelectorAll('#suggestions button');

// Squelette : à l'envoi, on empêche le rechargement de la page et on le dit dans le statut.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  statut.textContent = 'Interface prête.';
});

// Un clic sur un bouton de question copie son texte dans le champ, sans envoyer le formulaire.
for (const bouton of boutonsDeQuestions) {
  bouton.addEventListener('click', () => {
    champ.value = bouton.textContent;
    champ.focus();
    statut.textContent = 'Question copiée : modifiez-la ou envoyez-la.';
  });
}

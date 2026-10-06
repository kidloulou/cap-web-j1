import { validateMessage, replyTo } from './brain.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const boutonsDeQuestions = document.querySelectorAll('#suggestions button');

// Ajoute une ligne de texte à la liste des messages.
function ajouterLigne(texte) {
  const ligne = document.createElement('li');
  ligne.textContent = texte;
  liste.append(ligne);
}

// À l'envoi : la page ne se recharge pas, le cerveau vérifie le message puis répond.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultat = validateMessage(champ.value);
  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }
  ajouterLigne(`Vous : ${resultat.value}`);
  ajouterLigne(`Cap Web : ${replyTo(resultat.value)}`);
  champ.value = '';
  statut.textContent = '';
});

// Un clic sur un bouton de question copie son texte dans le champ, sans envoyer le formulaire.
for (const bouton of boutonsDeQuestions) {
  bouton.addEventListener('click', () => {
    champ.value = bouton.textContent;
    champ.focus();
    statut.textContent = 'Question copiée : modifiez-la ou envoyez-la.';
  });
}

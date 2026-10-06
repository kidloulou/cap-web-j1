import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const boutonsDeQuestions = document.querySelectorAll('#suggestions button');

// La conversation : un tableau d'objets { role, text }, où role vaut 'user' ou 'assistant'.
const historique = [];

// À l'envoi : la page ne se recharge pas, le cerveau vérifie le message puis répond.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const resultat = validateMessage(champ.value);
  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }
  historique.push({ role: 'user', text: resultat.value });
  historique.push({ role: 'assistant', text: replyTo(resultat.value) });
  renderMessages(historique, liste);
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

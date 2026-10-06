const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');
const boutonsDeQuestions = document.querySelectorAll('#suggestions button');

// À l'envoi : la page ne se recharge pas, le message est vérifié puis ajouté à la liste.
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const texte = champ.value.trim();
  if (texte === '') {
    statut.textContent = 'Message vide : écrivez une question.';
    champ.focus();
    return;
  }
  const ligne = document.createElement('li');
  ligne.textContent = `Vous : ${texte}`;
  liste.append(ligne);
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

// Le cerveau de Cap Web : il vérifie un message et choisit une réponse.
// Il ne connaît rien de la page : il reçoit du texte et renvoie du texte.

const REPONSE_SALUT = 'Bonjour ! Je suis Cap Web, l’assistant du réseau de bus et de tram. Écrivez « aide » pour voir ce que je sais faire.';
const REPONSE_AIDE = 'Je connais les mots « salut », « aide » et « test ». Les trajets, les horaires et les tarifs arrivent bientôt.';
const REPONSE_TEST = 'Test réussi : Cap Web vous reçoit bien.';
const REPONSE_REPLI = 'Je n’ai pas compris. Écrivez « aide » pour voir les mots que je connais.';

// Vérifie le message brut. Renvoie { ok: false, error } ou { ok: true, value }.
export function validateMessage(raw) {
  if (typeof raw !== 'string') {
    return { ok: false, error: 'Le message doit être un texte.' };
  }
  const value = raw.trim();
  if (value === '') {
    return { ok: false, error: 'Message vide : écrivez une question.' };
  }
  return { ok: true, value };
}

// Choisit la réponse : le message doit être exactement un mot connu,
// sans tenir compte des majuscules ni des espaces autour.
export function replyTo(message) {
  const mot = String(message).trim().toLowerCase();
  if (mot === 'salut' || mot === 'bonjour') {
    return REPONSE_SALUT;
  }
  if (mot === 'aide') {
    return REPONSE_AIDE;
  }
  if (mot === 'test') {
    return REPONSE_TEST;
  }
  return REPONSE_REPLI;
}

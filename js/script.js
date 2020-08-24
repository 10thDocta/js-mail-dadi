// definisco le variabili per l'HTML
const emailAddress = document.getElementById('email');
const hideMessageError = document.getElementById("hide_message_error");
let victoryMessage = document.getElementById("message_victory");

// definisco le variabili dei bottoni
const emailCheckBtn = document.getElementById("email_check_btn");
const diceBtn = document.getElementById("dice_btn");

/* ------------- 
      EMAIL CHECK
 -------------*/

// funzione per il reset
const reset = () => {
  hideMessageError.className = "hide";
  victoryMessage.className = "hide";
};

// funzione per messaggio di errore in caso di dati non nel formato corretto
const checkInput = (email) => {
  if (email.length == 0) {
    hideMessageError.classList.toggle("hide");
    return false;
  } else {
    return true;
  }
};

// funzione per calcolare il prezzo del biglietto
const checkEmail = () => {

  // faccio un reset appena viene invocata la funzione
  reset();

  // definisco le variabili che leggeranno i valori immessi, ma solo dopo il click sul bottone
  let email = (document.getElementById("email").value).toLowerCase();

  // ciclo if entra se la funzione di controllo dei dati immessi restituisce vero
  if (checkInput(email)) {
    const arr = ['prova@test.it', 'prova2@test.it', 'test@test.it'];

    const find = arr.indexOf(email);

    if (find === -1) {
      alert('email non presente del DB');
    } else {
      alert('email ok, presente nel DB');
    }
  }
};

emailCheckBtn.addEventListener("click", checkEmail);


/* ------------- 
      DICE
 -------------*/

function genNumber() {

  reset();

  let userNumb = document.getElementById("user_numb");
  let aiNumb = document.getElementById("ai_numb");
  let victoryH2 = document.getElementById("victory_h2");

  let userRandomNumb = Math.floor(Math.random() * 6) + 1;
  let aiRandomNumb = Math.floor(Math.random() * 6) + 1;

  userNumb.innerHTML = userRandomNumb;
  aiNumb.innerHTML = aiRandomNumb;

  if (userRandomNumb > aiRandomNumb) {
    victoryH2.innerHTML = "Gioatore vince";
  } else if (aiRandomNumb > userRandomNumb) {
    victoryH2.innerHTML = "Computer vince";
  } else {
    victoryH2.innerHTML = "Pareggio";
  }

  victoryMessage.classList.toggle("hide");
}


diceBtn.addEventListener("click", genNumber);
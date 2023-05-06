let randomNumber = Math.round(Math.random() * 10);

const inputNumber = document.querySelector('#inputNumber');
const tryButton = document.querySelector('#tryButton');
const screen01 = document.querySelector('.screen-01');
const screen02 = document.querySelector('.screen-02');
const tryAgainButton = document.querySelector('#tryAgainButton');
const message = document.querySelector('.screen-02 h2');
let xAttempts = 1;

tryAgainButton.addEventListener('click', () => toggleScreen())
tryButton.addEventListener('click', handleClickTryButton)
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter' && screen01.classList.contains('hide')) {
    resetGame()
  }
})

function handleClickTryButton(event) {
  event.preventDefault()
  if(inputNumber.value == randomNumber) {
    message.innerText = xAttempts === 1 ? `Acertou em ${xAttempts} tentativa!` : `Acertou em ${xAttempts} tentativas!`
    resetGame()
    return
  }
  inputNumber.value = ''
  xAttempts++;
}

function resetGame() {
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
  inputNumber.value = ''
  toggleScreen()
}

function toggleScreen() {
  screen01.classList.toggle('hide');
  screen02.classList.toggle('hide');
}






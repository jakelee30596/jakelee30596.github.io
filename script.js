const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;
let currentWordIndex = 0;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert('Opss Time off! ');
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    const randomObj = words[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;
  wordText.innerText = randomObj.word;
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert ("Please enter a word check");
    if(userWord !== correctWord) return alert ('Oops! is not a correct word');
    alert('congrats! is a correct word');
    initGame();
} 


refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);


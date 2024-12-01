const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

submitBtn.addEventListener('click', () => {
    const guess = Number(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = "Enter a valid number";
    } else if (guess < minNum || guess > maxNum) {
        message.textContent = "Enter a valid number";
    } else {
        attempts++;
        if (guess < answer) {
            message.textContent = "Too low! Try again";
        } else if (guess > answer) {
            message.textContent = "Too high! Try again";
        } else {
            message.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts`;
        }
    }
});

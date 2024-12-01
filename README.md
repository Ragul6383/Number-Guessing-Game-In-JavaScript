<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
  <style>
    * {
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: #fff;
}

.container {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 100%;
}

h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

input {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: calc(100% - 22px);
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

#message {
    margin-top: 20px;
    font-size: 1.2rem;
}

  </style>
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p>Guess a number between <span id="min-num">1</span> and <span id="max-num">100</span></p>
        <input type="number" id="guess-input" placeholder="Enter your guess">
        <button id="submit-btn">Submit Guess</button>
        <p id="message"></p>
    </div>
    <script>
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

    </script>
</body>
</html>

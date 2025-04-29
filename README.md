# 🎯 Try and Guess the Number Game

Welcome to the **"Try and Guess the Number"** game!  
Challenge yourself to guess a randomly chosen number between **1 and 100** within **10 attempts**!

---

## 🕹️ How to Play

- The computer randomly selects a number between **1 and 100**.
- You have **10 attempts** to guess the correct number.
- After each guess:
  - If your guess is **lower**, you will be told **"lower"**.
  - If your guess is **higher**, you will be told **"higher"**.
  - If your guess is **correct**, you win!
- If you use all 10 attempts without guessing the correct number, you lose.

---

## 🛠️ How It Works

- A random number is generated using JavaScript's `Math.random()` function.
- Each time you input a number and submit:
  - The program checks your guess.
  - Updates the number of remaining attempts.
  - Provides feedback ("Too low", "Too high", or "Correct!").
- After winning or losing, the game will reset.

---

## 🚀 How to Run

1. Clone this repository:

```bash
git clone https://akash9754.github.io/guess-the-number.git

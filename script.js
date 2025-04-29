const form = document.querySelector(".form");
const leftAttempt = document.querySelector(".lastResult");
const privousInput = document.querySelector(".guesses");
//const lableStyle = document.querySelector("label2#guess");
const Body = document.querySelector("body");
const diff = document.querySelector(".diffrence");
const inputValueArr = [];
let attempt = 9;
const numb = Math.round((Math.random()*100)+1);

//   +++++++++++ logic +++++++++++++++

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(attempt <= 0){
        alert("you lose the game");
        //lableStyle.style.color = "red";
        diff.innerHTML = "You Lose";
        diff.style.color = "red"
        Body.style.color = "red";
    }
    else
    {
        const inputNum = parseInt(document.getElementById("guessField").value);
        if(inputNum === "" || inputNum < 0 || isNaN(inputNum))
          {
            alert("please eneter a correct number");
          }
        else if(inputNum == numb)
          {
              alert("You won");
              diff.innerHTML = "You won";
              diff.style.color = "green"
          }
          inputValueArr.push(inputNum);
          privousInput.innerHTML =inputValueArr;
          console.log(numb);
          console.log(leftAttempt);
          leftAttempt.innerHTML = attempt;
          attempt--;
          if (inputNum > numb){
            diff.innerHTML = "Your guessed number is higher"
          }
          else if (inputNum < numb){
            diff.innerHTML = "Your guessed number is lower"
          }
    }
})







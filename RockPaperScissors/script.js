let score = 0
function getComputerChoice() {
  const array = ["Rock","Paper","Scissor"]
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}



// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    showResult(0,playerChoice,computerChoice,"Draw")
  } else if (playerChoice == "Rock" && computerChoice == "Scissor"){
    showResult(1,playerChoice,computerChoice,"Win")
  } else if (playerChoice == "Paper" && computerChoice == "Rock"){
    showResult(1,playerChoice,computerChoice,"Win") 
  } else if (playerChoice == "Scissor" && computerChoice == "Paper"){
    showResult(1,playerChoice,computerChoice,"Win")
  } else {
    showResult(-1,playerChoice,computerChoice,"Lose")
  }
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(given, playerChoice, computerChoice,result) {
  score += given
  const scorediv = document.getElementById("player-score")
  scorediv.innerText = score
  const handsdiv = document.getElementById("hands")
  handsdiv.innerText = `${playerChoice} VS ${computerChoice}`
  const resultdiv = document.getElementById("result")
  if (result == "Win") {
    resultdiv.innerText = "You Win!"
  } else if (result == "Lose") {
    resultdiv.innerText = "You Lose!"
  } else {
    resultdiv.innerText = "It's a Draw!"
  }

}

function onClickRPS(playerChoice) {
  const player = playerChoice
  const computer = getComputerChoice()
  getResult(player,computer)
}


function playGame() {
  const select = document.querySelectorAll(".rpsButton")
select.forEach(button => {
  button.onclick = () => {
    onClickRPS(button.value)
  };
})
  
}
function endGame() {
  score = 0
  const scorediv = document.getElementById("player-score")
  scorediv.innerText  = ""
  const handsdiv = document.getElementById("hands")
  handsdiv.innerText = ""
  const resultdiv = document.getElementById("result")
  resultdiv.innerText = ""
}

playGame()
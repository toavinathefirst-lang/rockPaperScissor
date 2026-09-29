import './style.css'
const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay= document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice = ""
let computerChoice = ""
let result =""
possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
  }))
function generateComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3 )+1//or you can use possibleChoices*length
  console.log(randomNumber);
  if(randomNumber==1){
    computerChoice = "rock"
  }
  if(randomNumber==2){
    computerChoice = "paper"
  }
  if(randomNumber==3){
    computerChoice = "scissor"
  }
  computerChoiceDisplay.innerHTML=computerChoice

  getResult()
  resultDisplay.innerHTML=result

}
function getResult(){
  if(computerChoice === userChoice){
    result = "it's a draw"
  }else if(computerChoice == "rock"){
    if(userChoice == "paper"){
      result = "You have WON "
    }else {
      result = "You have LOST "
    }
  }else if(computerChoice == "paper"){
    if(userChoice == "scissor"){
      result = "You have WON "
    }else {
      result = "You have LOST "
    }
  }else if(computerChoice == "scissor"){
    if(userChoice == "rock"){
      result = "You have WON "
    }else {
      result = "You have LOST "
    }
  }
}
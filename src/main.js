import './style.css'
const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

let userChoice = ""
let computerChoice = ""
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

}
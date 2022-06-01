console.log('hello world')

let computerOption
let playerOption

let botScore = 0
let playerScore = 0


const options = ["rock", "paper", "scissors"]

function computerPlay(){
   computerOption = options[Math.floor((Math.random() * options.length))];
   return computerOption
}

function playerSelection(){
   playerOption = (prompt('Rock, Paper or Scissors?')).toLowerCase();
   if ( (playerOption === "rock") || (playerOption === "paper")  || (playerOption === "scissors") ){
    return playerOption     
   }
   else{
     alert('opçao invalida')
    playerSelection()
   }
}



function compareOptions(botOption, player){
  if (botOption===player){
    console.log('The bot and you played ' + player + '. It is a tie, play again')
    playRound()
  }
  if (botOption==='rock' && player==="scissors"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You loose')
    botScore = botScore+1
  }
  if (botOption==='paper' && player==="rock"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You loose')
    botScore = botScore+1
  }
  if (botOption==='scissors' && player==="paper"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You loose')
    botScore = botScore+1
  }
  if (botOption==='scissors' && player==="rock"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You win')
    playerScore = playerScore+1
  }
  if (botOption==='rock' && player==="paper"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You win')
    playerScore = playerScore+1
  }
  if (botOption==='paper' && player==="scissors"){
    console.log('The bot played ' + botOption + ' and you played ' + player + '. You win')
    playerScore = playerScore+1
  }
}




// playerSelection()
// computerPlay()

function playRound(){
computerPlay()
playerSelection()
compareOptions(computerOption ,playerOption)
}



function bestOfFive(){
  botScore = 0
  playerScore = 0
  for (let i = 0; i < 6; i++) {
    if (playerScore===3 || botScore===3){
      console.log('The game is over. Bot Score: '+botScore+'. Player Score: '+playerScore+".")
    }
    else{
      playRound()
    }
  }
  if(botScore>playerScore){
    console.log('The bot wins! Are you really better than the machine?')
  }
  else{
    console.log('You win! Congratulations, you are better than the machine!')
  }
}


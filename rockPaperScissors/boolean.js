let rock = document.getElementById("rock")
let paper  = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let winCount = document.getElementById("winCount")
let tieCount = document.getElementById("tieCount")
let loseCount = document.getElementById("loseCount")
let result = document.getElementById("result")
let yourChoice = document.getElementById("yourChoice")
let computerChoice = document.getElementById("computerChoice")

let mathNumber = Math.random()
let computerMove = ""
let counter = 0

winCount.value = Number(0)
tieCount.value = Number(0)
loseCount.value = Number(0)
console.log(rock.value)

rock.onclick = () =>{
    mathNumber = Math.random()
    if (mathNumber > 0 && mathNumber <= 0.33) {
        yourChoice.textContent = "👊"
        computerMove = "Rock"
        computerChoice.textContent = "👊"
        tieCount.value ++
        result.textContent = "Tie"
    
        
    }
    else if (mathNumber > 0.33 && mathNumber <= 0.66) {
        yourChoice.textContent = "👊"
        computerMove = "Paper"
        computerChoice.textContent = "✋"
        result.textContent = "Lose"
        loseCount.value ++
    
    }
    else {
        yourChoice.textContent = "👊"
        computerMove = "Scissors"
        computerChoice.textContent = "✌️"
        result.textContent = "Win"
        winCount.value ++
      
    }
}

paper.onclick = () =>{
    mathNumber = Math.random()
    if (mathNumber > 0.33 && mathNumber <= 0.66) {
        yourChoice.textContent = "✋"
        computerMove = "Paper"
        computerChoice.textContent = "✋"
        result.textContent = "Tie"
        tieCount.value ++
    
    }
    else if (mathNumber > 0 && mathNumber <= 0.33) {
        yourChoice.textContent = "✋"
        computerMove = "Rock"
        computerChoice.textContent = "👊"
        result.textContent = "Win"
        winCount.value ++
       
    }
    else {
        yourChoice.textContent = "✋"
        computerMove = "Scissors"
        computerChoice.textContent = "✌️"
        result.textContent = "Lose"
        loseCount.value ++
      

    }

}
scissors.onclick = () =>{
    mathNumber = Math.random()
    if (mathNumber > 0.66  && mathNumber <= 1) {
        yourChoice.textContent = "✌️"
        computerMove = "Scissors"
        computerChoice.textContent = "✌️"
        result.textContent = "Tie"
        tieCount.value ++
    
    }
    else if (mathNumber > 0.33 && mathNumber <= 0.66) {
        yourChoice.textContent = "✌️"
        computerMove = "Paper"
        computerChoice.textContent = "✋"
        result.textContent = "Win"
        winCount.value ++
    
    }
    else {
        yourChoice.textContent = "✌️"
        computerMove = "Rock"
        computerChoice.textContent = "👊"
        result.textContent = "Lose"
        loseCount.value ++
      
    }
}

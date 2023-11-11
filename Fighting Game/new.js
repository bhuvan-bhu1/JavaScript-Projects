
let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')


const updateHealth = (player,health) => {
    if (player == "player1") {
        p1HealthDiv.innerText = health
    } else {
        p2HealthDiv.innerText = health
    }

}

const updatename = (player) => {
    if (player == "player1") {
        p1NameDiv.innerText  = player1.name 
    } else {
        p2NameDiv.innerText = player2.name
    }
}

const health = {"player1" : 100 , "player2" : 100}

class Player {
    constructor(name,health) {
        this.name = name
        this.health = health
    }

    strike(enemy) {
        let random = Math.ceil(Math.random() * 10)
        console.log(random)
        health[enemy] -= random
        updateHealth(enemy,health[enemy])
        check()
        console.log(health[enemy])
        return "True This step executed"    
        
    }

    heal(player) {
        let random = Math.ceil(Math.random() * 5)
        if (health[player] + random < 100) {
            health[player] += random 
            updateHealth(player,health[player])
        } else {
            health[player] = 100
            updateHealth(player,health[player])
        }
        
        
        console.log(health[player])
        return "This step executed"
    }
}

const check = () => {
    if (health["player1"] <= 0) {
        resultDiv.innerText = `${player2.name} Wins!`
        document.getElementById("victory").play()
    } else if (health["player2"] <= 0){
        resultDiv.innerText = `${player1.name} Wins!`
        document.getElementById("victory").play()
    }
}


const player1 = new Player("Jack",100)
const player2 = new Player("Rose",100)

updatename("player1")
updatename("player2")

let reset = document.getElementById("reset")
let stimulate = document.getElementById("play")

stimulate.onclick = () => {
    resetgame()
    while (health["player1"] > 0 && health["player2"] > 0) {
        player1.strike("player2") 
        player2.strike("player1")
    }
    check()
}

const resetgame = () => {
    health.player1 = 100
    health.player2 = 100
    p1HealthDiv.innerText = health.player1
    p2HealthDiv.innerText = health.player2
    resultDiv.innerText = ""
}

reset.onclick = () => resetgame()



document.addEventListener("keydown",function(e) {
    if (e.key == "q") {
        player1.strike("player2") 
        document.getElementById("p1attack").play()
    } else if (e.key == "a") {
        player1.heal("player1")
        document.getElementById("p1heal").play()
    } else if (e.key == "p") {
        player2.strike("player1")
        document.getElementById("p2attack").play()
    } else if (e.key == "l") {
        player2.heal("player2") 
        document.getElementById("p2heal").play()
    }
})
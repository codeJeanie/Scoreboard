let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCurrentScore = Number(homeScore.textContent)
let guestCurrentScore = Number(guestScore.textContent)

function homePlus1() {  
    homeCurrentScore += 1
    homeScore.textContent = homeCurrentScore  
}

function homePlus2() {
    homeCurrentScore += 2
    homeScore.textContent = homeCurrentScore
}

function homePlus3() {
    homeCurrentScore += 3
    homeScore.textContent = homeCurrentScore
}

function guestPlus1() {   
    guestCurrentScore += 1
    guestScore.textContent = guestCurrentScore
}

function guestPlus2() {
    guestCurrentScore += 2
    guestScore.textContent = guestCurrentScore
}

function guestPlus3() {
    guestCurrentScore += 3
    guestScore.textContent = guestCurrentScore
}
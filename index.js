// Pseudo Code
// make the points button clickable
// each time a point button is clicked, the score updates
// the winner is highlighted in a different color

let homeScore = 0
let guestScore = 0

let onePoint = 1
let twoPoints = 2
let threePoints = 3

let updateHomeScoreDisplay = document.getElementById("score-home")
let updateGuestScoreDisplay = document.getElementById("score-guest")


// Home
function addOnePointHome() {
    homeScore += onePoint
    updateHomeScoreDisplay.textContent = homeScore
    updateLeaderHighlight()
}

function addTwoPointsHome() {
    homeScore += twoPoints
    updateHomeScoreDisplay.textContent = homeScore
    updateLeaderHighlight()
}

function addThreePointsHome() {
    homeScore += threePoints
    updateHomeScoreDisplay.textContent = homeScore
    updateLeaderHighlight()
}

// Guest
function addOnePointGuest() {
    guestScore += onePoint
    updateGuestScoreDisplay.textContent = guestScore
    updateLeaderHighlight()
}

function addTwoPointsGuest() {
    guestScore += twoPoints
    updateGuestScoreDisplay.textContent = guestScore
    updateLeaderHighlight()
}

function addThreePointsGuest() {
    guestScore += threePoints
    updateGuestScoreDisplay.textContent = guestScore
    updateLeaderHighlight()
}

// leading team
// If homeScore > guestScore, highlight the Home scoreboard area.
// If guestScore > homeScore, highlight the Guest scoreboard area.

let scoreHomeContainer = document.getElementById("container-score-home")
let scoreGuestContainer = document.getElementById("container-score-guest")

console.log(scoreGuestContainer)


function updateLeaderHighlight() {
    console.log("Updating highlight: Home =", homeScore, "Guest =", guestScore);
    if (homeScore > guestScore) {
        scoreHomeContainer.classList.add("leader-color");
        scoreGuestContainer.classList.remove("leader-color");
    } else if (guestScore > homeScore) {
        scoreGuestContainer.classList.add("leader-color");
        scoreHomeContainer.classList.remove("leader-color");
    } else {
        scoreHomeContainer.classList.remove("leader-color");
        scoreGuestContainer.classList.remove("leader-color");
    }    
}










window.addEventListener("load", init);

// Globals

// Avalible Levels
const levels = {
  ez: 20,
  med: 10,
  hard: 5,
};

// To change level
let currentLevel = levels.ez

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const sentenceInput = document.querySelector("#sentence-input");
const currentSentence = document.querySelector("#current-sentence");
const scoreDispaly = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const difficultyEz = document.querySelector("#ez")
const difficultyMed = document.querySelector("#med")
const difficultyHard = document.querySelector("#hard")

const sentences = [
  "from bs4 import BeautifulSoup",
  "def getpoints(drivers, date, year):",
  'for index, data in enumerate(soup.find_all("td", class_="dark bold")):',
  'race["points"] = int(data.get_text())',
  "r = requests.get(url)",
  'for data in soup.find_all("a", class_="dark ArchiveLink"):',
  "else:",
  "return list",
  "squishlist = squishpoints(pointsanddates)",
  'filename = os.path.join(root, "html", "index.html")',
  'if __name__ == "__main__":',
];

// const sentences = ["1", "2"]

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = time;
  // Load sentence form array
  showSentence(sentences);
  // Start matching on sentence input
  sentenceInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
  // Difficulty buttons
  /*difficultyEz.addEventListener("click", diffEz)
  difficultyHard.addEventListener("click", diffHard)
  difficultyMed.addEventListener("click", diffMed)*/
}

/* Change Difficulty
function diffEz() {
  if (isPlaying === true){
  currentlevel = levels.ez}
}
function diffMed() {
  if (isPlaying === true){
  currentlevel = levels.med}
}
function diffHard() {
  currentlevel = levels.hard
}*/

// Start match
function startMatch() {
  if (matchSentence()) {
    isPlaying = true;
    time = currentLevel + 1;
    showSentence(sentences);
    sentenceInput.value = "";
    score++;
  }

  // if score is -1 display 0
  if (score === -1) {
    scoreDispaly.innerHTML = 0;
  } else {
    scoreDispaly.innerHTML = score;
  }
}

// Matching currentSentence to sentenceInput
function matchSentence() {
  if (sentenceInput.value === currentSentence.innerHTML) {
    message.innerHTML = "Correct!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Pick and show random sentence
function showSentence(sentences) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * sentences.length);
  // Output random sentence
  currentSentence.innerHTML = sentences[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  const gameOver = "Game over!!!";
  if (!isPlaying && time === 0) {
    message.innerHTML = gameOver;
    message.classList.add("red");
    score = -1;
  } else {
    message.classList.remove("red");
  }
}

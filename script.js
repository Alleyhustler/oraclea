const messagesElement = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const loadingScreen = document.getElementById("loadingScreen");
const loadingText = document.getElementById("loadingText");
const mainContent = document.getElementById("mainContent");

const oracleResponses = [
    "The answer lies within...",
    "Are you prepared for what you seek?",
    "Sometimes, it's better not to know.",
    "The stars are aligning...",
    "Beware of what you seek.",
    "Ask again, but be warned.",
    "Your destiny is not set in stone.",
    "Seek within for the truest answer.",
    "It will be revealed in due time.",
    "Patience is the path to wisdom."
];

const loadingMessages = [
    "Connecting to The Oracle...",
    "Initializing core systems...",
    "Fetching data from the ether...",
    "Decrypting secrets...",
    "Calibrating your fate...",
    "Opening the portal...",
    "The Oracle is ready."
];

let loadingStep = 0;

function showLoadingMessages() {
    if (loadingStep < loadingMessages.length) {
        loadingText.textContent = loadingMessages[loadingStep];
        loadingStep++;
        setTimeout(showLoadingMessages, 2000);  // Adjust time per message as needed
    } else {
        hideLoadingScreen();
    }
}

function hideLoadingScreen() {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
}

function getRandomResponse() {
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
}

function displayMessage(text, isOracle) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", isOracle ? "oracle" : "user");
    const messageText = document.createElement("p");
    messageText.textContent = text;
    messageElement.appendChild(messageText);
    messagesElement.appendChild(messageElement);
    messagesElement.scrollTop = messagesElement.scrollHeight;
}

function simulateOracleResponse() {
    const oracleTyping = document.querySelector(".typing-animation");
    setTimeout(() => {
        oracleTyping.textContent = "";
        displayMessage(getRandomResponse(), true);
    }, 2000);
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && userInput.value) {
        displayMessage(userInput.value, false);
        userInput.value = "";
        simulateOracleResponse();
    }
});

// Start loading sequence
showLoadingMessages();

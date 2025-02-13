(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
document.body.style.overflow = "hidden";
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Aylin, please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// //////////////


const container = document.querySelector('.falling-elements');

function createElement() {
  const element = document.createElement('div');
  element.classList.add('element');

  // Случайным образом выбираем, будет ли это сердечко или лепесток
  if (Math.random() > 0.5) {
    element.classList.add('heart');
    element.innerHTML = '❤️';
  } else  {
    element.classList.add('petal');
    element.innerHTML = '💗';
  }

  element.style.left = Math.random() * 100 + 'vw';
  element.style.animationDuration = (Math.random() * 2 + 3) + 's';
  element.style.fontSize = (Math.random() * 10 + 15) + 'px';
  container.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 5000);
}

setInterval(createElement, 100);

// ////////////////////////////////////////////////////

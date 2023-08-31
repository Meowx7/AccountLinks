// script.js
const showLineButton = document.getElementById('showline');
const showDiscordButton = document.getElementById('showdiscord');
const showSteamButton = document.getElementById('showsteam');
const linePopup = document.getElementById('linePopup');
const discordPopup = document.getElementById('discordPopup');
const steamPopup = document.getElementById('steamPopup');
const closeLinePopupButton = document.getElementById('closeLinePopup');
const closeDiscordPopupButton = document.getElementById('closeDiscordPopup');
const closeSteamPopupButton = document.getElementById('closeSteamPopup');
showLineButton.addEventListener('click', () => {
  linePopup.style.display = 'flex';
});

showDiscordButton.addEventListener('click', () => {
  discordPopup.style.display = 'flex';
});

showSteamButton.addEventListener('click', () => {
  steamPopup.style.display = 'flex';
});


closeLinePopupButton.addEventListener('click', () => {
  linePopup.style.display = 'none';
});

closeDiscordPopupButton.addEventListener('click', () => {
  discordPopup.style.display = 'none';
});

closeSteamPopupButton.addEventListener('click', () => {
  steamPopup.style.display = 'none';
});



// Load saved values or use defaults
let idk = Number(localStorage.getItem('idk')) || 0;
let persec = Number(localStorage.getItem('persec')) || 0;
let perclick = Number(localStorage.getItem('perclick')) || 1;
let intervalId = null;
const headerDiv = document.getElementById("header");
const APS = document.getElementById("APS");
const CPS = document.getElementById("CPS");

function saveGame() {
  localStorage.setItem('idk', idk);
  localStorage.setItem('persec', persec);
  localStorage.setItem('perclick', perclick);
}

function updateHeader() {
  headerDiv.textContent = idk;
  saveGame();
}


function Add() {
  idk = idk + perclick;
  updateHeader();
}


function startPerSecond() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    idk += persec;
    updateHeader();
  }, 1000);
}

// Update APS and CPS display every 100ms for faster feedback
setInterval(() => {
  APS.textContent = 'Money Per Second: ' + persec;
  CPS.textContent = 'Money Per Click: ' + perclick;
}, 100);

function addsec(amount,cost) {
  if (idk >= cost) {
    persec = persec + amount;
    idk -= cost;
    updateHeader();
    saveGame();
  } else {
    alert('not enough clicks');
  }
}
function addclick(amount,cost) {
  if (idk >= cost) {
    perclick = perclick + amount;
    idk -= cost;
    updateHeader();
    saveGame();
  } else {
    alert('not enough clicks');
  }
}


// On first load, update header to show loaded values
updateHeader();
startPerSecond();

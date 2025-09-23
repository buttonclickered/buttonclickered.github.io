let idk = 0;         // always a number
let persec = 0;
let intervalId = null;
let perclick = 1
const headerDiv = document.getElementById("header");
const APS = document.getElementById("APS");
const CPS = document.getElementById("CPS")
function updateHeader() {
  headerDiv.textContent = idk;
}

function Add() {
  idk = idk + perclick
  updateHeader();
}

function startPerSecond() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    idk += persec;
    updateHeader();
    APS.textContent = 'Money Per Second: ' + persec
    CPS.textContent = 'Money Per Click: ' + perclick
  }, 1000);
}

function addsec(amount,cost) {
  if (idk >= cost) {
    persec = persec + amount
    idk -= cost;        // subtract 10 from the number
    updateHeader();
  } else {
    alert('not enough clicks');
  }
}
function addclick(amount,cost) {
  if (idk >= cost) {
    perclick = perclick + amount
    idk -= cost;        // subtract 10 from the number
    updateHeader();
  } else {
    alert('not enough clicks');
  }
}

startPerSecond();

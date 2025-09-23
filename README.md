<html><head>
  <style>
    #header {
    border: 5px solid black;
      background-color: yellow;
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
        position: relative;
  left: 440px; 
    }
    #APS {
    position: relative;
    left: 15px;
    bottom: 150px;
      background-color: rgba(255,255,0,0.5);
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: 5px solid black;
    }
    #CPS {
    position: relative;
    left: 15px;
    bottom: 140px;
      background-color: rgba(255,255,0,0.5);
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: 5px solid black;
    }
    #clickme {
    position: relative;
    left: 15px;
    top: -125px;
    background-color: green;
      width: 150px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border: 5px solid black;
      }
      #upgrades {
          position: relative;
    left: 350px;
    bottom: 200px;
    background-color: rgba(255,0,0,0.6);
      width: 150px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      border: 5px solid black;
      }
      #onepsec {
    position: relative;
    left: 350px;
    bottom: -60px;
    background-color: rgba(0,0,255,0.6);
      width: 75px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      }
        #oneclick {
    position: relative;
    left: 430px;
    bottom: -25px;
    background-color: rgba(0,0,255,0.6);
      width: 100px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      }
        html, body {
      background-color: lightblue;
      margin: 0; /* optional, remove default margin */
      padding: 0;
      height: 100%;
    }
  </style>
  <title>HTML Clicker</title>
</head>
<body>
  <div id="header">0</div>
  <br> <br>
  <button id="clickme" onclick="Add()">Click me</button>
  <button id="onepsec" onclick="addsec(1,10)">+1 Per Second $10</button>
  <button id="oneclick" onclick="addclick(1,25)">+1 Per Click $25</button>
<div id="APS">Money Per Second: 0</div>
<div id="CPS">Money Per Click: 1</div>
<div id="upgrades">Upgrades:</div>

  <script>
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
  </script>


</body></html>
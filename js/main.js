var forma = document.querySelector("#form");

const piyodaTezlik = 3.6;

const velosipedTezlik = 20.1;

const mashinaTezlik = 70;

const samolyotTezlik = 800;

var soat1=document.getElementById(timesoat1);
var minut1=document.getElementById(timeminute1);
var soat2=document.getElementById(timesoat2);
var minut2=document.getElementById(timeminute2);
var soat3=document.getElementById(timesoat3);
var minut3=document.getElementById(timeminute3);
var soat4=document.getElementById(timesoat4);
var minut4=document.getElementById(timeminute4);

forma.addEventListener("submit", function(e){
    e.preventDefault();
    //piyoda
    soatOne = Math.floor(Number(input.value)/piyodaTezlik);
    minuteOne=(((Number(input.value)/piyodaTezlik)-Math.floor(Number(input.value)/piyodaTezlik))*60).toFixed(0);
    timesoat1.textContent=soatOne;
    timeminute1.textContent=minuteOne;
    //velosiped
    soatTwo = Math.floor(Number(input.value)/velosipedTezlik);
    minuteTwo=(((Number(input.value)/velosipedTezlik)-Math.floor(Number(input.value)/velosipedTezlik))*60).toFixed(0);
    timesoat2.textContent=soatTwo;
    timeminute2.textContent=minuteTwo;
    //mashina
    soatThree = Math.floor(Number(input.value)/mashinaTezlik);
    minuteThree=(((Number(input.value)/mashinaTezlik)-Math.floor(Number(input.value)/mashinaTezlik))*60).toFixed(0);
    timesoat3.textContent=soatThree;
    timeminute3.textContent=minuteThree;
    //samolyot
    soatFour = Math.floor(Number(input.value)/samolyotTezlik);
    minuteFour=(((Number(input.value)/samolyotTezlik)-Math.floor(Number(input.value)/samolyotTezlik))*60).toFixed(0);
    timesoat4.textContent=soatFour;
    timeminute4.textContent=minuteFour;


})

forma.addEventListener('submit', function (evt) {
    evt.preventDefault();
  
    if (!isNaN(input.value)) {
      if (input.value > 0) {
        calculateHourMinute(piyodaTezlik, soat1, minut1);
        calculateHourMinute(mashinaTezlik, soat2, minut2);
        calculateHourMinute(velosipedTezlik, soat3, minut3);
        calculateHourMinute(samolyotTezlik, soat4, minut4);
        input.value = input.value.trim();
      }
      else {
        alert('Iltimos, noldan katta musbat son kiriting )');
        resetValue(soat1, minut1);
        resetValue(soat2, minut2);
        resetValue(soat3, minut3);
        resetValue(soat4, minut4);
        input.value = '';
      }
    } else {
      alert('Iltimos, masofani raqamda kiriting )');
      resetValue(soat1, minut1);
      resetValue(soat2, minut2);
      resetValue(soat3, minut3);
      resetValue(soat4, minut4);
      input.value = '';
    }
  
    input.focus();
  });    

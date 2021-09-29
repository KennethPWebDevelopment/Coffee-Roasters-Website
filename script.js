'use strict'


// Detect accordian click for step 1

let accordianQuestion1 = document.getElementById('accordianQuestion1'); 
let stepsLeft1 = document.getElementById('stepsLeft1');

// Change color of steps for step 1

accordianQuestion1.onclick = function changeContent() {
    stepsLeft1.style.color = 'black'; 
    stepsLeft2.style.color = 'gray'; 
    stepsLeft3.style.color = 'gray'; 
    stepsLeft4.style.color = 'gray'; 
    stepsLeft5.style.color = 'gray'; 
 }

 // Detect accordian click for step 2

let accordianQuestion2 = document.getElementById('accordianQuestion2'); 
let stepsLeft2 = document.getElementById('stepsLeft2');

// Change color of steps for step 2

accordianQuestion2.onclick = function changeContent() {
    stepsLeft1.style.color = 'gray'; 
    stepsLeft2.style.color = 'black'; 
    stepsLeft3.style.color = 'gray'; 
    stepsLeft4.style.color = 'gray'; 
    stepsLeft5.style.color = 'gray'; 
 }

  // Detect accordian click for step 3

let accordianQuestion3 = document.getElementById('accordianQuestion3'); 
let stepsLeft3 = document.getElementById('stepsLeft3');

// Change color of steps for step 3

accordianQuestion3.onclick = function changeContent() {
    stepsLeft1.style.color = 'gray'; 
    stepsLeft2.style.color = 'gray'; 
    stepsLeft3.style.color = 'black'; 
    stepsLeft4.style.color = 'gray'; 
    stepsLeft5.style.color = 'gray'; 
 }

   // Detect accordian click for step 4

let accordianQuestion4 = document.getElementById('accordianQuestion4'); 
let stepsLeft4 = document.getElementById('stepsLeft4');

// Change color of steps for step 4

accordianQuestion4.onclick = function changeContent() {
    stepsLeft1.style.color = 'gray'; 
    stepsLeft2.style.color = 'gray'; 
    stepsLeft3.style.color = 'gray'; 
    stepsLeft4.style.color = 'black'; 
    stepsLeft5.style.color = 'gray'; 
 }

    // Detect accordian click for step 5

let accordianQuestion5 = document.getElementById('accordianQuestion5'); 
let stepsLeft5 = document.getElementById('stepsLeft5');

// Change color of steps for step 5

accordianQuestion5.onclick = function changeContent() {
    stepsLeft1.style.color = 'gray'; 
    stepsLeft2.style.color = 'gray'; 
    stepsLeft3.style.color = 'gray'; 
    stepsLeft4.style.color = 'gray'; 
    stepsLeft5.style.color = 'black'; 
 }

// Accordian card section

const card1 = document.querySelector("#card-1"); 
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");
const card5 = document.querySelector("#card-5");
const card6 = document.querySelector("#card-6"); 
const card7 = document.querySelector("#card-7");
const card8 = document.querySelector("#card-8");
const card9 = document.querySelector("#card-9");
const card10 = document.querySelector("#card-10");
const card11 = document.querySelector("#card-11"); 
const card12 = document.querySelector("#card-12");
const card13 = document.querySelector("#card-13");
const card14 = document.querySelector("#card-14");
const card15 = document.querySelector("#card-15");

const card1Header = document.querySelector("#card1header");
const card2Header = document.querySelector("#card2header");
const card3Header = document.querySelector("#card3header");
const card4Header = document.querySelector("#card4header");
const card5Header = document.querySelector("#card5header");
const card6Header = document.querySelector("#card6header");
const card7Header = document.querySelector("#card7header");
const card8Header = document.querySelector("#card8header");
const card9Header = document.querySelector("#card9header");
const card10Header = document.querySelector("#card10header");
const card11Header = document.querySelector("#card11header");
const card12Header = document.querySelector("#card12header");
const card13Header = document.querySelector("#card13header");
const card14Header = document.querySelector("#card14header");
const card15Header = document.querySelector("#card15header");

// Total Amount Variable

let totalAmount = document.querySelector("#total-amount"); 

// Coffee Choices

let choiceOne = document.querySelectorAll(".choice-one"); 
let choiceTwo = document.querySelectorAll(".choice-two"); 
let choiceThree = document.querySelectorAll(".choice-three"); 
let choiceFour = document.querySelectorAll(".choice-four"); 
let choiceFive = document.querySelectorAll(".choice-five"); 

// Card1 Active

card1.addEventListener("click", function() {
   card1.classList.add("section2CardActive");
   card1Header.classList.add("section2HeaderActive");
   card2.classList.remove("section2CardActive");
   card2Header.classList.remove("section2HeaderActive");
   card3.classList.remove("section2CardActive");
   card3Header.classList.remove("section2HeaderActive");

   choiceOne[0].innerHTML = "Capsule"; 
   choiceOne[1].innerHTML = "Capsule"; 
})

// Card2 Active

card2.addEventListener("click", function() {
   card1.classList.remove("section2CardActive");
   card1Header.classList.remove("section2HeaderActive");
   card2.classList.add("section2CardActive");
   card2Header.classList.add("section2HeaderActive");
   card3.classList.remove("section2CardActive");
   card3Header.classList.remove("section2HeaderActive");

   choiceOne[0].innerHTML = "Filter";
   choiceOne[1].innerHTML = "Filter";
})

// Card3 Active

card3.addEventListener("click", function() {
   card1.classList.remove("section2CardActive");
   card1Header.classList.remove("section2HeaderActive");
   card2.classList.remove("section2CardActive");
   card2Header.classList.remove("section2HeaderActive");
   card3.classList.add("section2CardActive");
   card3Header.classList.add("section2HeaderActive");

   choiceOne[0].innerHTML = "Expresso";
   choiceOne[1].innerHTML = "Expresso";
})

// Card4 Active

card4.addEventListener("click", function() {
   card4.classList.add("section2CardActive");
   card4Header.classList.add("section2HeaderActive");
   card5.classList.remove("section2CardActive");
   card5Header.classList.remove("section2HeaderActive");
   card6.classList.remove("section2CardActive");
   card6Header.classList.remove("section2HeaderActive");

   choiceTwo[0].innerHTML = "Single origin";
   choiceTwo[1].innerHTML = "Single origin";
})

// Card5 Active

card5.addEventListener("click", function() {
   card4.classList.remove("section2CardActive");
   card4Header.classList.remove("section2HeaderActive");
   card5.classList.add("section2CardActive");
   card5Header.classList.add("section2HeaderActive");
   card6.classList.remove("section2CardActive");
   card6Header.classList.remove("section2HeaderActive");

   choiceTwo[0].innerHTML = "Decaf";
   choiceTwo[1].innerHTML = "Decaf";
})

// Card6 Active

card6.addEventListener("click", function() {
   card4.classList.remove("section2CardActive");
   card4Header.classList.remove("section2HeaderActive");
   card5.classList.remove("section2CardActive");
   card5Header.classList.remove("section2HeaderActive");
   card6.classList.add("section2CardActive");
   card6Header.classList.add("section2HeaderActive");

   choiceTwo[0].innerHTML = "Blended";
   choiceTwo[1].innerHTML = "Blended";
})

// Card7 Active

card7.addEventListener("click", function() {
   card7.classList.add("section2CardActive");
   card7Header.classList.add("section2HeaderActive");
   card8.classList.remove("section2CardActive");
   card8Header.classList.remove("section2HeaderActive");
   card9.classList.remove("section2CardActive");
   card9Header.classList.remove("section2HeaderActive");

   choiceThree[0].innerHTML = "250g";
   choiceThree[1].innerHTML = "250g";
})

// Card8 Active

card8.addEventListener("click", function() {
   card7.classList.remove("section2CardActive");
   card7Header.classList.remove("section2HeaderActive");
   card8.classList.add("section2CardActive");
   card8Header.classList.add("section2HeaderActive");
   card9.classList.remove("section2CardActive");
   card9Header.classList.remove("section2HeaderActive");

   choiceThree[0].innerHTML = "500g";
   choiceThree[1].innerHTML = "500g";
})

// Card9 Active

card9.addEventListener("click", function() {
   card7.classList.remove("section2CardActive");
   card7Header.classList.remove("section2HeaderActive");
   card8.classList.remove("section2CardActive");
   card8Header.classList.remove("section2HeaderActive");
   card9.classList.add("section2CardActive");
   card9Header.classList.add("section2HeaderActive");

   choiceThree[0].innerHTML = "1000g";
   choiceThree[1].innerHTML = "1000g";
})

// Card10 Active

card10.addEventListener("click", function() {
   card10.classList.add("section2CardActive");
   card10Header.classList.add("section2HeaderActive");
   card11.classList.remove("section2CardActive");
   card11Header.classList.remove("section2HeaderActive");
   card12Header.classList.remove("section2CardActive");
   card12Header.classList.remove("section2HeaderActive");

   choiceFour[0].innerHTML = "Wholebean";
   choiceFour[1].innerHTML = "Wholebean";
})

// Card11 Active

card11.addEventListener("click", function() {
   card10.classList.remove("section2CardActive");
   card10Header.classList.remove("section2HeaderActive");
   card11.classList.add("section2CardActive");
   card11Header.classList.add("section2HeaderActive");
   card12.classList.remove("section2CardActive");
   card12Header.classList.remove("section2HeaderActive");

   choiceFour[0].innerHTML = "Filter";
   choiceFour[1].innerHTML = "Filter";
})

// Card12 Active

card12.addEventListener("click", function() {
   card10.classList.remove("section2CardActive");
   card10Header.classList.remove("section2HeaderActive");
   card11.classList.remove("section2CardActive");
   card11Header.classList.remove("section2HeaderActive");
   card12.classList.add("section2CardActive");
   card12Header.classList.add("section2HeaderActive");

   choiceFour[0].innerHTML = "Cafetiére";
   choiceFour[1].innerHTML = "Cafetiére";
})

// Card13 Active

card13.addEventListener("click", function() {
   card13.classList.add("section2CardActive");
   card13Header.classList.add("section2HeaderActive");
   card14.classList.remove("section2CardActive");
   card14Header.classList.remove("section2HeaderActive");
   card15Header.classList.remove("section2CardActive");
   card15Header.classList.remove("section2HeaderActive");

   choiceFive[0].innerHTML = "Every week";
   choiceFive[1].innerHTML = "Every week";
   totalAmount.innerHTML = "14.00 /mo"
})

// Card14 Active

card14.addEventListener("click", function() {
   card13.classList.remove("section2CardActive");
   card13Header.classList.remove("section2HeaderActive");
   card14.classList.add("section2CardActive");
   card14Header.classList.add("section2HeaderActive");
   card15.classList.remove("section2CardActive");
   card15Header.classList.remove("section2HeaderActive");

   choiceFive[0].innerHTML = "Every 2 weeks";
   choiceFive[1].innerHTML = "Every 2 weeks";
   totalAmount.innerHTML = "17.25 /mo"
})

// Card15 Active

card15.addEventListener("click", function() {
   card13.classList.remove("section2CardActive");
   card13Header.classList.remove("section2HeaderActive");
   card14.classList.remove("section2CardActive");
   card14Header.classList.remove("section2HeaderActive");
   card15.classList.add("section2CardActive");
   card15Header.classList.add("section2HeaderActive");

   choiceFive[0].innerHTML = "Every month";
   choiceFive[1].innerHTML = "Every month";
   totalAmount.innerHTML = "22.50 /mo"
})

// Create your plan button

const createPlanBtn = document.querySelector("#create-plan-btn"); 
const orderSummaryOverlay = document.querySelector("#order-summary-overlay"); 

createPlanBtn.addEventListener("click", function() {
   orderSummaryOverlay.style.display = "block";
})



// Global Variables
const billAmount = document.getElementById('bill-amount'),
      tipPercent = document.querySelectorAll('.tip-percent'),
      customTip = document.querySelector('#custom'),
      numberOfPeople = document.querySelector('.number-of-people'),
      tipAmount = document.querySelector('.tip-display'),
      totalAmount = document.querySelector('.total-amount'),
      resetButton = document.querySelector('#reset'),
      form = document.querySelector('.card');


// Update Totals Display
const updateTotals = (tip, total) => {

  // If values are Not a number, display 0
  if(isNaN(tip)) {
    tipAmount.innerText = "$0.00";
  } else if(isNaN(total)) {
    totalAmount.innerText = "$0.00";
  } else {
    tipAmount.innerText = `$${tip}`;
    totalAmount.innerText = `$${total}`;
  }
};


// Calculate Tip
const calculateTip = (bill, tip, numPeople) => {
  const tipTotal = (bill * tip);
  
  const totalPerPerson = (bill + tipTotal) / numPeople;

  const tipRounded = tipTotal.toFixed(2) / numPeople;
  const totalRounded = totalPerPerson.toFixed(2);

  // Update Display
  updateTotals(tipRounded, totalRounded);
};


// Bill Amount Event Listener
// Values must be reinitiated every event listener

billAmount.addEventListener('change', function() {
  let billAmountValue = parseFloat(billAmount.value),
    tipPercentValue = parseFloat(tipPercent.value),
    customTipValue = parseFloat(customTip.value),
    numberOfPeopleValue = parseFloat(numberOfPeople.value);

  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
});

// Tip Buttons Event Listeners

tipPercent.forEach(tip => tip.addEventListener('click', e => {
  e.preventDefault();

  // Add highlight on clicked button
  // e.target.classList.add('clicked');

  let tipPercentValue = parseFloat(e.target.value),
      billAmountValue = parseFloat(billAmount.value),
    
      customTipValue = parseFloat(customTip.value),
      numberOfPeopleValue = parseFloat(numberOfPeople.value);

  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
  })
);

// Custom Tip Event Listener

customTip.addEventListener('input', function(e) {
  let billAmountValue = parseFloat(billAmount.value),
    tipPercentValue = parseFloat(tipPercent.value),
    customTipValue = parseFloat(e.target.value),
    numberOfPeopleValue = parseFloat(numberOfPeople.value);

  console.log(billAmountValue, customTipValue, numberOfPeopleValue);

  calculateTip(billAmountValue, customTipValue, numberOfPeopleValue);
})

// Number of People Event Listener

numberOfPeople.addEventListener('change', function(e) {
  let billAmountValue = parseFloat(billAmount.value),
    tipPercentValue = tipPercent.forEach(tip => tip.addEventListener('click', e => {
      e.preventDefault();
      return e.target.value;
    })),
    customTipValue = parseFloat(customTip.value),
    numberOfPeopleValue = parseFloat(e.target.value);


  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
});

// Reset Values Upon click
resetButton.addEventListener('click', function() {
  tipAmount.innerText = 0;
  totalAmount.innerText = 0
})
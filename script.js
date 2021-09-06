// Global Variables
const billAmount = document.getElementById('bill-amount'),
      tipPercent = document.querySelectorAll('.tip-percent'),
      customTip = document.querySelector('#custom'),
      numberOfPeople = document.querySelector('.number-of-people'),
      tipAmount = document.querySelector('.number-total'),
      totalAmount = document.querySelector('.total-amount'),
      resetButton = document.querySelector('#reset'),
      form = document.querySelector('.card'),
      fiveButton = document.querySelector('#five'),
      tenButton = document.querySelector('#ten'),
      fifteenButton = document.querySelector('#fifteen'),
      twentyButton = document.querySelector('#twenty'),
      fiftyButton = document.querySelector('#fifty');




const updateTotals = (tip, total) => {
  tipAmount.innerText = tip;
  totalAmount.innerText = total;

  if(tip == NaN) {
    tipAmount.innerText = "0";
  } else if(total == NaN) {
    totalAmount.innerText = "0";
  }
};

const calculateTip = (bill, tip, numPeople) => {
  const tipTotal = Math.floor((bill * tip) / numPeople);
  const totalPerPerson = Math.floor((bill + tipTotal) / numPeople);

  updateTotals(tipTotal, totalPerPerson);
};

billAmount.addEventListener('change', function(e) {
  let billAmountValue = parseFloat(billAmount.value),
    tipPercentValue = parseFloat(tipPercent.value),
    customTipValue = parseFloat(customTip.value),
    numberOfPeopleValue = parseFloat(numberOfPeople.value);


  console.log(billAmountValue);
  console.log(tipPercentValue);
  console.log(numberOfPeopleValue);
  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
});

// Tip Buttons Event Listeners

tipPercent.forEach(tip => tip.addEventListener('click', e => {
  e.preventDefault();

  e.target.classList.add('clicked');

  let tipPercentValue = e.target.value,
      billAmountValue = parseFloat(billAmount.value),
    
      customTipValue = parseFloat(customTip.value),
      numberOfPeopleValue = parseFloat(numberOfPeople.value);

  
  console.log(billAmountValue);
  console.log(tipPercentValue);
  console.log(numberOfPeopleValue);

  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
  })
);


numberOfPeople.addEventListener('change', function(e) {
  let billAmountValue = parseFloat(billAmount.value),
    
    customTipValue = parseFloat(customTip.value),
    numberOfPeopleValue = e.target.value;

    console.log(billAmountValue);
  console.log(tipPercentValue);
  console.log(numberOfPeopleValue);
  calculateTip(billAmountValue, tipPercentValue, numberOfPeopleValue);
});

resetButton.addEventListener('click', function() {
  tipAmount.innerText = 0;
  totalAmount.innerText = 0
})
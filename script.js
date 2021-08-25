// Global Variables
const billAmount = document.getElementById('bill-amount'),
      tipPercent = document.querySelectorAll('.tip-percent'),
      customTip = document.querySelector('#custom'),
      numberOfPeople = document.querySelector('.number-of-people'),
      tipAmount = document.querySelector('.number-total'),
      totalAmount = document.querySelector('.total-amount'),
      submitButton = document.querySelector('#reset'),
      form = document.querySelector('.card');

//Capture Tip Percent Button Values
let tipPercentButton = tipPercent.forEach(tip => tip.addEventListener('click', e => e.target.value));

// Calculate Tip function
const calculateTip = (bill, tipPercent, numPeople) => {
  const tip = bill * tipPercent;
  const totalPerPerson = (tip + bill) / numPeople;
  return totalPerPerson;
}

// Form Event Listener
form.addEventListener('submit', e => {
  e.preventDefault();

  // Values load upon form submit (Otherwise load upon DOM initiation)
  let billAmountValue = billAmount.valueAsNumber,

      numberOfPeopleValue = numberOfPeople.valueAsNumber;


  console.log(calculateTip(billAmountValue, tipPercentButton, numberOfPeopleValue));

})






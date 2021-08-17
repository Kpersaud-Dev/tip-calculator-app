// Global variables
const billAmount = document.querySelector('.bill-amount'),
      tipPercent = document.querySelectorAll('.tip-percent'),
      customTip = document.getElementById('custom'),
      numberOfPeople = document.querySelector('.number-of-people'),
      amountPerPerson = document.querySelector('.per-person-amount'),
      totalAmount = document.querySelector('.total-amount'),
      resetButton = document.getElementById('reset'),
      numberTotal = document.querySelector('.number-total');

let billAmountValue = billAmount.valueAsNumber,
    tipPercentValue = tipPercent.forEach(tip => tip.valueAsNumber),
    numberOfPeopleValue = numberOfPeople.valueAsNumber;  
        


// Display Totals Function
const displayTotals = (tipAmount, total) => {
  // Display tip amount
  numberTotal.innerText = tipAmount;
  // Display Total per person
  totalAmount.innerText = total;
}


// Calculate Tip Function
const calculateTip = (total, tipPercent, numberOfPeople) => {
  // Extra Tip Amount
  const tip = total * tipPercent;
  // Tip Amount Per Person
  const perPerson = tip / numberOfPeople;
  // Return Total + Tip Per Person
  const totalPerPerson = (total + perPerson) / numberOfPeople;

  displayTotals(perPerson, totalPerPerson);
}

const updateTotals = () => {
  calculateTip(billAmountValue, 0.15, numberOfPeopleValue);
}



billAmount.addEventListener('change', e => {
  numberTotal.innerText = e.target.valueAsNumber / tipPercentvalue;
  totalAmount.innerText = e.target.valueAsNumber / numberOfPeopleValue;
});

tipPercent.forEach(tip => tip.addEventListener('click', e => {
  console.log(e.target.value);
}));

numberOfPeople.addEventListener('change', e => {
  numberTotal.innerText = e.target.valueAsNumber / tipPercentvalue;

  totalAmount.innerText = e.target.valueAsNumber / numberOfPeopleValue;
});


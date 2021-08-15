// Global variables
const billAmount = document.querySelector('.bill-amount'),
      tipPercent = document.querySelectorAll('.tip-percent'),
      customTip = document.getElementById('custom'),
      numberOfPeople = document.querySelector('.number-of-people'),
      amountPerPerson = document.querySelector('.per-person-amount'),
      totalAmount = document.querySelector('.total-amount'),
      resetButton = document.getElementById('reset'),
      numberTotal = document.querySelector('.number-total');

const billAmountValue = billAmount.value,
      tipPercentValue = tipPercent.value,
      numberOfPeopleValue = numberOfPeople.value;    

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

// calculateTip(billAmountValue, 0.15, numberOfPeopleValue);

billAmount.addEventListener('change', calculateTip);

numberOfPeople.addEventListener('change', calculateTip);


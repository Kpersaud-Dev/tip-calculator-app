// Global Variables
const billAmount = document.getElementById('bill-amount').value,
      tipPercent = document.querySelectorAll('.tip-percent').value,
      customTip = document.querySelector('#custom').value,
      numberOfPeople = document.querySelector('.number-of-people').value,
      tipAmount = document.querySelector('.number-total'),
      totalAmount = document.querySelector('.total-amount'),
      submitButton = document.querySelector('#reset'),
      form = document.querySelector('.card'),
      fiveButton = document.querySelector('#five'),
      tenButton = document.querySelector('#ten'),
      fifteenButton = document.querySelector('#fifteen'),
      twentyButton = document.querySelector('#twenty'),
      fiftyButton = document.querySelector('#fifty');

const updateTotals = (tip, total) => {
  tipAmount.innerText = tip;
  totalAmount.innerText = total;
}

const calculateTip = () => {
  
}
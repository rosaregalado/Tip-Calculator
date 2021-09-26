
  const inputBill = document.querySelector('#input-bill');
  const inputTip = document.querySelector('#input-tip');
  const inputPeople = document.querySelector('#input-people');
  const displayTip = document.querySelector('#display-tip');
  const displayTotal = document.querySelector('#display-total');


  //handle inputs with another function
  inputBill.addEventListener('input', handleBill);
  inputTip.addEventListener('input', handleBill);
  inputPeople.addEventListener('input', handleBill); 
  
  function handleBill(e) {
    const percent = parseInt(inputTip.value);
    const amountBill = parseFloat(inputBill.value);
    const amountTip = parseInt(inputTip.value);
    const amountPeople = parseInt(inputPeople.value);
    //check for empty str or NaN
    if (amountBill === "" || amountBill === NaN) {
      alert("Please enter a value");
    }
    const tip = amountBill * percent / 100;
    const total = amountBill + tip;
    const perPerson = total / amountPeople;
    displayTip.innerHTML = tip.toFixed(2);
    displayTotal.innerHTML = total.toFixed(2);
  }
  






const calculateBtn = document.getElementById('submit').addEventListener('click', calculate);
const formEl = document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
});

function calculate() {
  // Get all input Elements and assign their value to individual arrays based on their section titles: income and expenses
  inputEl = document.getElementsByTagName('input');
  let inputVal;
  const incomeArr = [];
  const expenseArr = [];
  for (var i=0; i<inputEl.length; i++){
    inputVal = inputEl[i].value;
    if (i < 4){
      incomeArr[i] = inputVal;
    } else {
      expenseArr.push(inputVal);
    }
  }
  
  // Waarn user to not leave any boxes empty, if they do reload page, else call next func
  let alerted = false;
  for (var c=0; c<expenseArr.length; c++){
    if (expenseArr[c] === ""){
      if (!alerted){
        alert("Please do not leave any boxes empty, if one does not apply then enter 0")
        alerted = true;
        location.reload();
      }
    } else {
      createSubmitPage();
      alerted = false; // reset alerted to false
    }
  }

  // New Function -------------------------------------------------
  function createSubmitPage() {
    const incomeTotalArr = incomeArr.map(function(x) {
      return parseInt(x, 10);
    })
    
    let incomeTotal = 0;
    for (var x=0; x<incomeTotalArr.length; x++){
      if (x<3){
        incomeTotal += Math.round(incomeTotalArr[x]/12, 2);
      } else if (x===3){
          incomeTotal = incomeTotal - (incomeTotal * (incomeTotalArr[x]/100))
      }
    }

    const expenseTotalArr = expenseArr.map(function(x) {
      return parseInt(x, 10);
    })

    let expenseTotal = 0;
    for (var b=0; b<expenseTotalArr.length; b++){
      expenseTotal += Math.round(expenseTotalArr[b], 2);
    }

    let savingsTotal = 0;
    savingsTotal += Math.round((incomeTotal - expenseTotal),2);


    // STYLING AND CREATION OF NEW ELEMENTS ON CLICK ------------------------------------------------------------
    document.body.innerHTML = `<main>
    <div id='container'>
      <h1 id='new-title'>
        Income Statistics
      </h1>
      <div id='new-contain'>
        <div id='aft-inc'>
          <p id="new-income" class="new-income">£${Math.round(incomeArr[0]/12, 2)}</p>
          <h3 id='income-titles'> After Tax Income/mo </h3>
        </div>
        <div id='second-inc'>
          <p id="new-income" class="new-income">£${Math.round(incomeArr[1]/12, 2)}</p>
          <h3 id='income-titles'> Secondary Income/mo </h3>
        </div>
        <div id='work-bon'>
          <p id="new-income" class="new-income">£${Math.round(incomeArr[2]/12, 2)}</p>
          <h3 id='income-titles'> Work Bonus Income/mo </h3>
        </div>
        <div id='pens-cont'>
          <p id="new-income" class="new-income">${incomeArr[3]}%</p>
          <h3 id='income-titles'> Pension Cont./mo </h3>
        </div>
      </div>
      <h1 id="income-total">Total Income: £${incomeTotal}/mo</h1>
      <!-- Expenses -->
      <h1 id='expense-title-new'>
        Expense Statistics
      </h1>
      <div id='expense-contain'>
        <div id='mortgage-rent-new'>
        <p id="new-expense" class="new-expense">£${Math.round(expenseArr[0], 2)}/mo</p>
        <h3 id='expense-titles'> Mortgage/Rent Payments </h3>
        </div>
        <div id='utility-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[1], 2)}/mo</p>
          <h3 id='expense-titles'> Utility Payments </h3>
        </div>
        <div id='home-insure-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[2], 2)}/mo</p>
          <h3 id='expense-titles'> Home Insurance </h3>
        </div>
        <div id='council-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[3], 2)}/mo</p>
          <h3 id='expense-titles'> Council Tax </h3>
        </div>
        <div id='internet-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[4], 2)}/mo</p>
          <h3 id='expense-titles'> Internet Bill </h3>
        </div>
        <div id='phone-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[5], 2)}/mo</p>
          <h3 id='expense-titles'> Phone Bill </h3>
        </div>
        <div id='car-insure-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[6], 2)}/mo</p>
          <h3 id='expense-titles'> Car Insurance </h3>
        </div>
        <div id='car-finance-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[7], 2)}/mo</p>
          <h3 id='expense-titles'> Car Finance </h3>
        </div>
        <div id='shopping-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[8], 2)}/mo</p>
          <h3 id='expense-titles'> Shopping </h3>
        </div>
        <div id='subscription-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[9], 2)}/mo</p>
          <h3 id='expense-titles'> Subscription </h3>
        </div>
        <div id='cc-debt-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[10], 2)}/mo</p>
          <h3 id='expense-titles'> CC Debt </h3>
        </div>
        <div id='other-new'>
          <p id="new-expense" class="new-expense">£${Math.round(expenseArr[11], 2)}/mo</p>
          <h3 id='expense-titles'> Other Payments </h3>
        </div>
      </div>
      <h1 id="expense-total">Total Expenses: £${expenseTotal}</h1>
      <h1 id="total-savings">Total Avg. Savings/mo: £${savingsTotal}</h1>
    </div>
    </main>`

    // INCOME
    // CONTAINER
    const containerEl = document.getElementById('container')
    containerEl.style.width = `70rem`
    containerEl.style.height = `70rem`
    containerEl.style.margin = `auto`
    containerEl.style.position = `relative`
    containerEl.style.top = `20px`
    containerEl.style.borderRadius = `40px`
    containerEl.style.boxShadow = `0px 5px 25px rgba(255,255,255,.7)`
    containerEl.style.background = `linear-gradient(to right bottom, #8cf1eb, #64CCC5, #176B87, #053B50)`
    containerEl.style.textAlignLast = `center`
    // MAIN CONTAINER
    const newContainEl = document.getElementById('new-contain')
    newContainEl.style.display = `grid`
    newContainEl.style.gridTemplateColumns = `1fr 1fr 1fr 1fr`
    // INCOME HEADING
    const incomeHeadEl = document.getElementById('new-title')
    incomeHeadEl.style.fontFamily = `Poppins, monospace, sans-serif`
    incomeHeadEl.style.fontSize = `50px`
    incomeHeadEl.style.textDecoration = `Underline`
    incomeHeadEl.style.margin = `0px`
    incomeHeadEl.style.paddingTop = `50px`
    incomeHeadEl.position = `relative`
    // INCOME NUMBERS
    const incomePrices = document.getElementsByClassName('new-income')
    console.log(incomePrices);
    for (var j=0; j<incomePrices.length; j++){
      incomePrices[j].style.fontSize = `32px`
      incomePrices[j].style.margin = `0px`
      incomePrices[j].style.position = `relative`
      incomePrices[j].style.top = `25px`;
      incomePrices[j].style.fontWeight = `700`;
      incomePrices[j].style.color = `white`;
    }
    const h1El = document.getElementById('income-total')
    h1El.style.width = `600px`
    h1El.style.margin = `auto`
    h1El.style.position = `relative`
    h1El.style.top = `25px`
    h1El.style.textDecoration = `underline`

    // EXPENSES
    // EXPENSE TITLE
    const exepnseHeadEl = document.getElementById('expense-title-new')
    exepnseHeadEl.style.fontFamily = `Poppins, monospace, sans-serif`
    exepnseHeadEl.style.fontSize = `50px`
    exepnseHeadEl.style.textDecoration = `Underline`
    exepnseHeadEl.style.margin = `0px`
    exepnseHeadEl.style.paddingTop = `50px`
    exepnseHeadEl.style.position = `relative`
    // EXPENSE NUMBERS
    const expensePrices = document.getElementsByClassName('new-expense')
    for (var a=0; a<expensePrices.length; a++){
      expensePrices[a].style.fontSize = `32px`
      expensePrices[a].style.margin = `0px`
      expensePrices[a].style.position = `relative`
      expensePrices[a].style.top = `25px`;
      expensePrices[a].style.fontWeight = `700`;
      expensePrices[a].style.color = `white`;
    }
    const expenseTitle = document.getElementById('expense-total')
    expenseTitle.style.width = `400px`
    expenseTitle.style.margin = `auto`
    expenseTitle.style.position = `relative`
    expenseTitle.style.top = `25px`
    expenseTitle.style.textDecoration = `underline`
    // EXPENSE CONTAINER
    const expenseContainerEl = document.getElementById('expense-contain')
    expenseContainerEl.style.display = `grid`
    expenseContainerEl.style.gridTemplateColumns = `1fr 1fr 1fr 1fr`

    // SAVINGS
    const savingsEl = document.getElementById('total-savings');
    savingsEl.style.width = `850px`
    savingsEl.style.fontFamily = `Poppins, monospace, sans-serif`
    savingsEl.style.fontSize = `50px`
    savingsEl.style.margin = `0px`
    savingsEl.style.marginTop = `25px`
    savingsEl.style.position = `relative`
    savingsEl.style.left = `120px`
    savingsEl.style.top = `100px`
    savingsEl.style.textAlign = `left`;

    // STYLING AND CREATION OF NEW ELEMENTS ON CLICK ------------------------------------------------------------
  }
}
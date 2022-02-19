document.getElementById ('calculate-button').addEventListener ('click', function () {
    const incomeInput = document.getElementById ('income-input');
    const incomeInputText = incomeInput.value;
    let incomeAmount = parseFloat (incomeInputText);
     // console.log (incomeAmount);
     incomeInput.value = '';
    
    const foodInput = document.getElementById ('food-input');
    const foodInputText = foodInput.value;
    let foodAmount = parseFloat (foodInputText);
    // console.log (foodAmount); 
    foodInput.value = '';

    const rentInput = document.getElementById ('rent-input');
    const rentInputText = rentInput.value;
    let rentAmount = parseFloat (rentInputText);
    // console.log (rentAmount);
    rentInput.value = '';

    const clothesInput = document.getElementById ('clothes-input');
    const clothesInputText = clothesInput.value;
    let clothesAmount = parseFloat (clothesInputText);
    // console.log (clothesAmount)
    clothesInput.value = '';

    let totalExpenses = foodAmount + rentAmount + clothesAmount;
    // console.log (totalExpenses);

    let totalBalanceField = document.getElementById ('balance');
    let totalBalanceText = totalBalanceField.innerText;
    let balance = incomeAmount - totalExpenses;
    totalBalanceField.innerText = balance;
    
    let totalExpensesField = document.getElementById ('total-expenses');
    let totalExpensesText = totalExpensesField.innerText;
    let expensesAmount = totalExpenses;
    totalExpensesField.innerText = totalExpenses;
});



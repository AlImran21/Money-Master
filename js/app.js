document.getElementById ('calculate-button').addEventListener ('click', function () {
const incomeInput = document.getElementById ('income-input');
const newIncomeAmountText = incomeInput.value;
incomeInput.value = '';
// console.log (newIncomeAmountText);

const foodInput = document.getElementById ('food-input');
const newFoodAmountText = foodInput.value;
foodInput.value = '';
// console.log (newFoodAmountText);

const rentInput = document.getElementById ('rent-input');
const newRentAmountText = rentInput.value;
rentInput.value = '';
// console.log (newRentAmountText);

const clothesInput = document.getElementById ('clothes-input');
const newClothesAmountText = clothesInput.value;
clothesInput.value = '';
console.log (newClothesAmountText);






});
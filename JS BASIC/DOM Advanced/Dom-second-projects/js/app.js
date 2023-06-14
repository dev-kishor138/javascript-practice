function getInputValue(id) {
  const input = document.getElementById(id);
  const amount = parseFloat(input.value);

  input.value = "";
  return amount;
}
// function getInnerText (id){
//   const idCall = document.getElementById(id);
//   const idValue = parseFloat(idCall.innerText);
//   return idValue;
// }

function getAddition(...numbers) {
  //   return numbers.reduce((prev, curr) => prev + curr, 0);
  let result = 0;
  for (const number of numbers) {
    result = result + number;
  }
  return result;
}
// function allAdd() {
//   const total = getAddition(
//     getInputValue("food-input"),
//     getInputValue("rent-input"),
//     getInputValue("other-input")
//   );
//   return total;
// }

function getSubtraction(id, id2, id3) {
  
  const income = getInputValue(id);
  const total = document.getElementById(id2);
  const balance = income - total;

  document.getElementById(id3).innerText = balance;
  
}

document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const total = getAddition(
      getInputValue("food-input"),
      getInputValue("rent-input"),
     getInputValue("other-input")
   );
    document.getElementById('total-expanse').innerText = total;

    getSubtraction('income-input', total, 'total-expanse');
    
  });

// function addition (num){
//     let result = getInputValue(num);
//     for(const num of arguments){
//         result = result + num;
//     }
//     return result;
// }

// function minus (num1, num2){
//     const element1 = document.getElementById(num1);
//     const elementValue = parseInt(element1.value);

//     const balance = elementValue - num2;

//     return balance;
// }

// document.getElementById('calculate-button').addEventListener('click', function(){

//     const

//     // const total = getTotalExpanse('food-input', 'rent-input', 'other-input');

//     // const totalExpanse = document.getElementById('total-expanse');
//     // totalExpanse.innerText = total;

//     const incomeInput = document.getElementById('income-input');
//     const incomeAmount = parseInt(incomeInput.value);

//     const balanceAmount = incomeAmount - total;

//     const balance = document.getElementById('balance');
//     balance.innerText = balanceAmount;

// const foodInput = document.getElementById('food-input');
// const foodAmount = parseInt(foodInput.value);

// const rentInput = document.getElementById('rent-input');
// const rentAmount = parseInt(rentInput.value);

// const otherInput = document.getElementById('other-input');
// const otherAmount = parseInt(otherInput.value);

// const total = foodAmount + rentAmount + otherAmount;
// const totalExpanse = document.getElementById('total-expanse');

// totalExpanse.innerText = total;

// })

// document.getElementById('save-button').addEventListener('click', function(){
//     const balance = document.getElementById('balance');
//     const balanceAmount = parseInt(balance.innerText);

//     const saveInput = document.getElementById('save-input');
//     const saveValue = parseInt(saveInput.value);

//     const percentage = ((balanceAmount / 100) * saveValue).toFixed(3);

//     const savingAmount = document.getElementById('saving-amount');
//     savingAmount.innerText = percentage;

//     const remainingAmount = balanceAmount - percentage;

//     const remainigBalance = document.getElementById('remaining-balance');
//     remainigBalance.innerText = remainingAmount;

// })

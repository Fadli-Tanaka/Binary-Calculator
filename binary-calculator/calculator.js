// Addition
// Basically we input binary digit and perform addition by changing binary digit to decimal number.
// After the addition, we change it back to binary digit.
const addZero = document.querySelector(".zero");
const addOne = document.querySelector(".one");
const tempValue = document.querySelector(".temp-value");
const additionButton = document.querySelector(".addition");
const substractionButton = document.querySelector(".substraction");
const multiplicationButton = document.querySelector(".multiplication");
const divisionButton = document.querySelector(".division");
const resetButton = document.querySelector(".reset");
const deleteOne = document.querySelector(".delete");
const resultSum = document.querySelector(".result-sum");

// temp => contain binary digit that is inputed by user by clicking 0 and 1 button
// totalSum => is decimal number based on binary digit. 
let temp = "";
let totalSum = 0;

// Event when "0" button is clicked
addZero.addEventListener("click", () => {
    temp += "0";
    tempValue.innerText = temp;
});
  
// Event when "1" button is clicked
addOne.addEventListener("click", () => {
    temp += "1";
    tempValue.innerText = temp;
});

// Function of operator. Change totalSum value according to operator being used.
const operator = (total, binaryDigit, operate) => {
    // add value to totalSum.
    // sumBinary => variable that contain totalSum in binary digit

    // operator
    if (operate === "addition"){
        total = total + binaryToDecimal(binaryDigit);
    } else if (operate === "substraction"){
        total = total - binaryToDecimal(binaryDigit);
    } else if (operate === "multiplication"){
        total = total * binaryToDecimal(binaryDigit);
    } else if (operate === "division"){
        total = total / binaryToDecimal(binaryDigit);
    }
    let sumBinary = decimalToBinary(total);
    resultSum.innerText = sumBinary;
    return total;
}

// Function to reset tempValue after operation done
const resetTemp = () => {
    temp = "";
    tempValue.innerText = "_";
}

// Event when "+" button is clicked
additionButton.addEventListener("click", () => {
    // if user haven't input value yet, return alert.
    if (temp === ""){
        return alert("please insert value");
    }
    // using operator function
    totalSum = operator(totalSum, temp, "addition");
    // resetting value after addition
    resetTemp();
});

// Event when "-" button is clicked
substractionButton.addEventListener("click", () => {
    // if user haven't input value yet, return alert.
    if (temp === ""){
        return alert("please insert value");
    }
    totalSum = operator(totalSum, temp, "substraction");
    // resetting value after addition
    resetTemp();
});

// Event when "-" button is clicked
multiplicationButton.addEventListener("click", () => {
    // if user haven't input value yet, return alert.
    if (temp === ""){
        return alert("please insert value");
    }
    totalSum = operator(totalSum, temp, "multiplication");
    // resetting value after addition
    resetTemp();
});

divisionButton.addEventListener("click", () => {
    // if user haven't input value yet, return alert.
    if (temp === ""){
        return alert("please insert value");
    }
    totalSum = operator(totalSum, temp, "division");
    // resetting value after addition
    resetTemp();
});



// Event when remove is clicked
deleteOne.addEventListener("click", ()=>{
    // deleting the last string character using slice method
    if (temp.length === 1 || temp.length === 0){
        temp = temp.slice(0, -1);
        tempValue.innerText = "_";
    } else {
        temp = temp.slice(0, -1);
        tempValue.innerText = temp;
    }
})

// Event when reset is clicked
resetButton.addEventListener("click", ()=>{
    resetTemp();
    totalSum = 0;
    resultSum.innerText= "0";
})
// Convert from binary digit to decimal, and vice versa.

// Function to convert binary digit in string input to decimal number
function binaryToDecimal (binaryInput) {
    // powerIndex = the power number of base variable
    // binarySum = sum of binary digit in decimal
    let powerIndex = 0;
    let binarySum = 0;

    // for loop until every binary digit is observed. 
    // this for loop using reverse system, so the binary digit will be read from far left to right.
    for (let i = binaryInput.length - 1; i >= 0; i--){
        if (binaryInput[i] === "0"){
            let temp = 0;
            binarySum += temp;
        } else if (binaryInput[i] === "1"){
            let temp = Math.pow(2, powerIndex);
            binarySum += temp;
        }
        // add power number for next binary digit
        powerIndex += 1;
    }
    // return total of binary digit in decimal
    return binarySum;
}

// Function to decimal number into binary digit.
function decimalToBinary(decimalInput){
    // tempDecimal = decimal number
    // binaryDecimal = a string to input binary digit based on observed decimal number
    let tempDecimal = decimalInput;
    let binaryDigit = "";

    // function to observed how many number of digit need based on decimal number
    // ie. if decimal number < 255, digitNumber is 8 as always, however, if > 255, digitNumber needs to be 9.
    function numberDigitBinary (decimalInput){
        // digitNumber = how many number of binary digit based on observed decimal number;
        // tempDecimalDigit = dummies of tempDecimal to observed how many number of binary digit
        // ie. if decimal number < 255, digitNumber is 8 as always, however, if > 255, digitNumber needs to be 9.
        let digitNumber = 8;
        let tempDecimalDigit = decimalInput;

        // for loop conditional to calculate how many number of binary digit 
        for(let tempCondition = true; tempCondition === true;){
            if (tempDecimalDigit >= Math.pow(2, digitNumber)){
                digitNumber += 1;
            } else {
                digitNumber += 0;
                tempCondition = false;
            }
        }
        // return digitNumber
        return digitNumber;
    }
    
    // for loop conditional to obeserve the binary digit from decimal number
    // the initial state use digitNumber that has been observed in numberDigitBinary function
    let digitNumber = numberDigitBinary(tempDecimal);
    for (let i =  digitNumber - 1; i >= 0; i--){
        if(tempDecimal >= Math.pow(2, i)){
            binaryDigit += "1";
            tempDecimal = tempDecimal - Math.pow(2, i);
        } else if(tempDecimal <= Math.pow(2, i)){
            binaryDigit += "0";
        }
    }
    // return binaryDigit
    return binaryDigit;
}


// Checking some example
console.log(decimalToBinary(14));
console.log(decimalToBinary(7));
console.log(binaryToDecimal("101"));
console.log(binaryToDecimal("11"));

console.log(binaryToDecimal("101") + binaryToDecimal("11"));
console.log(decimalToBinary(binaryToDecimal("101") + binaryToDecimal("11")));
// Program run as expected...



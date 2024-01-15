// selecting the converter option
const converterOption = document.querySelector("#converterSelect");
const binaryDecimalContainer = document.querySelector(".binary-decimal-container");
const decimalBinaryContainer = document.querySelector(".decimal-binary-container");


// Changing Converter Container after selecting the converter option
converterOption.addEventListener("change", function(){
    let strValue = converterOption.value;
    if (strValue === "binaryDecimal"){
        binaryDecimalContainer.style.display = "flex";
        decimalBinaryContainer.style.display = "none";
    } else if (strValue === "decimalBinary"){
        binaryDecimalContainer.style.display = "none";
        decimalBinaryContainer.style.display = "flex";
    }
})

// Get value for binary to decimal
const binaryValue = document.querySelector("#inputValue");
const decimalResult = document.querySelector(".decimalResult");

binaryValue.addEventListener("change", function(){
    // temp = dummy for binary value that is inputed
    let temp = binaryValue.value.toString();

    // this for loop check if there is any word contain other than 0 and 1.
    // if so, only return alert without any result
    for (let i = 0; i < temp.length; i++){
        if (temp[i] !== "0" && temp[i] !== "1"){
            binaryValue.value = "";
            decimalResult.innerText = "N/A";
            return alert("contain letter other than 0 and 1");
        }
    }
    // get the decimal result to show
    decimalResult.innerText = binaryToDecimal(temp);
})

// Get value for decimal to binary
const decimalValue = document.querySelector("#inputValue2");
const binaryResult = document.querySelector(".binaryResult");

decimalValue.addEventListener("change", function(){
    // temp = dummy for binary value that is inputed
    let temp = parseInt(decimalValue.value);

    // this for loop check if there is any letter that is not a number in the input
    // if so, only return alert without any result
    if(isNaN(temp)){
        decimalValue.value = "";
        binaryResult.innerText = "N/A";
        return alert("contain letter that is not a number");
    }
    // get the binary result to show
    binaryResult.innerText = decimalToBinary(temp);
})
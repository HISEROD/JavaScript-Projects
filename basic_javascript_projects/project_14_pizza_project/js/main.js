function getReceipt() {
    let text1 = "<h3>You Ordered:</h3>"; // initialize content for showText div
    let runningTotal = 0;
    let sizeTotal = 0; // price of pizza based on selected size
    let sizeArray = document.getElementsByClassName("size"); // get all size elements
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) { // action only necessary for the checked element
            var selectedSize = sizeArray[i].value;
            text1 = `${text1}${selectedSize}<br>`; // add size to the cart list
        }
    }
    if        (selectedSize === "Personal Pizza") {
        sizeTotal = 6; // 6 = $6.00
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Gargantuan Pizza") {
        sizeTotal = 22;
    }
    runningTotal = sizeTotal; // start the runningTotal with the cost of the selected pizza size
    console.log(`${selectedSize} = ${sizeTotal}.00`); // log the cost of the selected size
    console.log(`size text1: ${text1}`); // log the current state of the text to be assigned to showText
    console.log(`subtotal: ${runningTotal}.00`); // log the current state of the runningTotal aka subtotal
    getTopping(runningTotal, text1); // call getTopping to account for fruits/vegetables/meats
}

function getTopping(runningTotal, text1) {
    let toppingTotal = 0; // running total but for only the toppings
    let selectedTopping = []; // array for storing any selected toppings
    let toppingArray = document.getElementsByClassName("toppings"); // get all possible topping elements
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) { // action only necessary if the topping is selected
            selectedTopping.push(toppingArray[j].value); // add to the array
            console.log(`selected topping item: (${toppingArray[j].value})`); // log selected each iteration
            text1 = `${text1}${toppingArray[j].value}<br>`;
        }
    }
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); // - 1 bc first topping is free
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); // add topping cost to runningTotal
    console.log(`total selected topping items: ${toppingCount}`); // log # of toppings
    console.log(`${toppingCount} topping - 1 free topping = $${toppingTotal}.00`); // log topping charge info
    console.log(`topping text1: ${text1}`); // log text to be shown in showText
    console.log(`Purchase total: $${runningTotal}.00`); // log final state of runningTotal
    document.getElementById("showText").innerHTML = text1; // show info in showText
    document.getElementById("totalPrice").innerHTML = `<h3>Total: <strong>$${runningTotal}.00</strong></h3>` // show final price in document
}
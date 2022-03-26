document.write(typeof "Word" + ' '); // added a space so it looks a teeny tiny bit nicer
document.write(typeof 3);

function func() { // this code is sort of a backwards loop. None of the if statements are triggered on the first execution
                  // but each time the function is called, one of the if conditions will evaluate to true.
    if (document.getElementById("test").innerHTML == "Infinity") { // triggered by the Infinity result from the below if statement
        document.getElementById("test").innerHTML = `(tau > pi) = ${Math.PI * 2 > Math.PI}, (pi > tau) = ${Math.PI > Math.PI * 2}`; // duh
        return;
    }
    if (document.getElementById("test").innerHTML == "false") { // triggered by the false result from the below if statement
        document.getElementById("test").innerHTML = Math.exp(710); // Infinity: e ** 710 is > 10 ** 308
        return;
    }
    if (document.getElementById("test").innerHTML == "true") { // triggered by the true result from the below if statement
        document.getElementById("test").innerHTML = isNaN(0); // false: 0 = number
        return;
    }
    if (document.getElementById("test").innerHTML == "NaN") { // triggered by the NaN from the below instruction
        document.getElementById("test").innerHTML = isNaN("0 / 0"); // true: string != number
        return;
    }
    document.getElementById("test").innerHTML = 0 / 0; // NaN
}

console.log(2 + 2); // 4
console.log("1" === "1"); // true
console.log(1 === "2"); // false
console.log(1 === "1"); // false
console.log(1 === 2); // false
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
console.log(!false); // true
console.log(!true); // false

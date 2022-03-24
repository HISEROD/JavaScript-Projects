function loop_func() {
    // loop variable
    let i = 1;
    // shortcut for the p element
    let loop = document.getElementById("loop");
    // add numbers starting at 1 and stopping after 10
    while (i <= 10) {
        loop.innerHTML += `${i} `;
        i++; // increment
    }
    // why not add the overall length of the p element each time?
    loop.innerHTML += `length after loop: ${loop.innerHTML.length}`;
}

function array_func() {
    // fibonacci sequence
    let array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
    // loop until the end of the array is reached
    for (i = 0; i < array.length; i++) {
        // add each element of the array to the array paragraph
        document.getElementById("array").innerHTML += `${array[i]} `;
    }
}

// create an object
let farce = {
    // assign boolean values
    jounce: true,
    balk: false
};

// modify and add KVP's
farce.jounce = false;
farce.limpet = 6.28318530718;

function let_func() {
    // create convenience variable for the let paragraph
    let p = document.getElementById("let");
    // add a few of farce's properties to the paragraph
    p.innerHTML = farce.jounce; // boolean
    p.innerHTML += farce.limpet; // number
}
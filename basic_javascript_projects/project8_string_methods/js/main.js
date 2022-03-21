function slice() {
    var sentence = "All work and no play makes Johnny a dull boy."; // unless his work is play
    var section = sentence.slice(27, 33); // J @ index 27 and 27 + length of "Johnny" = 33
    document.getElementById("slice").innerHTML = section;
}

function concatenate() {
    document.getElementById("concatenate").innerHTML = "A man, a plan, a".concat(" canal, Panama!"); // a palindrome
}

function string() {
    document.getElementById("string").innerHTML = (233390182).toString(29); // clearly witchcraft

    // !! SPOILER !!

    // 233390182 == 11*29**5 + 10*29**4 + 28*29**3 + 14*29**2 + 2*29 + 9
    //              (b)        (a)        (s)        (e)
    // in base 29, the symbols are 0123456789abcd... ...s [0 - 28]
}

function precision() {
    // I just like the first 10 digits of e because of the 18281828 part
    document.getElementById("precision").innerHTML = Math.E.toPrecision(10);
}
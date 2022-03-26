var awesome = toString((1 + 1 / 144) ** 144), expression = "(1 + 1 / 144) ** 144 = ";   // approximate Euler's number using one of Jacob Bernoulli's formulae
expression += awesome;                                                                  // add awesome to expression by concatenation
window.alert(expression);                                                               // alert the user of the output of the preceding expression
document.write("Euler's number has been successfully approximated.");                   // inform the user of success

function My_First_Function() {              // Defining a function and naming it
    var str = "I hope you pressed Enter instead of clicking!";   // Defining a variable and giving it
                                            // a string value
    str = str.fontcolor("red");             // make the text light gray
    document.getElementById("Button_Text").innerHTML = str; // Putting the value
                                            // of the variable into the HTML elementFromPoint
                                            // with the "Button_Text" id
}

function My_Second_Function() {
    window.alert(                           // Alert the user that they are supposed to know everything.
        "You hovered over the button intending to click it instead of just pressing Enter! Come on, dude! I autofocused it just for you and you didn't even acknowledge it. smh"
    );
}

var hue = 120;

function Yet_Another_Function() {
    // set the color of the paragraph every time it is hovered ↓
    document.getElementById("paragraph").style.color = `hsl(${window["hue"]}, 100%, 50%)`;
    window["hue"] += 60; // increment the hue by 60 degrees
}
function vote_func() {
    var age, can_vote; // initialize variables
    age = document.getElementById("age").value; // get age from form
    can_vote = (age < 18) ? "You are too young" : "You are old enough"; // assign appropriate sentence to can_vote based on age
    document.getElementById("vote").innerHTML = can_vote + " to vote."; // put the value of can_vote into the vote ¶
}

// ----------------------------------------------------------------------------------------------------------------------------

class vehicle { // class declaration
    constructor(make, model, year, color) {
        this.vehicle_make = make; // initialize variables and assign values based on provided args
        this.vehicle_model = model;
        this.vehicle_year = year;
        this.vehicle_color = color;
    }
}
var Jack = new vehicle("Dodge", "Viper", 2020, "red"); // Jack is cool
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "white and black"); // Emily is cool
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard"); // Erik is a little cool
function func() {
    document.getElementById("kac").innerHTML =
        `Erik drives a ${Erik.vehicle_color}-colored ${Erik.vehicle_model} manufactured in ${Erik.vehicle_year}.`; // format stuff
}

// ----------------------------------------------------------------------------------------------------------------------------

function nest() { // enveloping function
    var res = "defenestrators are bad dudes"; // bad puctuation and capitalization
    function sentencify(str) { // nested function
        return `${str.charAt(0).toUpperCase()}${str.substring(1)}.`; // turn into good punctuation and capitalization
    }
    res = sentencify(res); // assign sentencified version to the original variable
    document.getElementById("nested_func").innerHTML = res; // stick it in the document
}
var x = 'global';
function foo() {
    var y = 'local';
    return x + y;
}
function bar() {
    console.log(x + y); // error: y undefined because it's local to foo()
}
foo();
bar();

function hour() { // long expression due to my inline, floor-division-based modulo. An if statement would be much better for readability
    document.getElementById("test").innerHTML = `current hour: ${(new Date().getHours() - 1) - 12 * Math.floor((new Date().getHours() - 1) / 12) + 1}`;
}

// ---------------------------------------------------------------------------------------------------------------------------------

function vote_func() {
    var age, can_vote; // initialize variables
    age = document.getElementById("age").value; // get age from form
    if (age < 18) { // assign appropriate sentence to can_vote based on age
        can_vote = "You are too young to vote.";
    }
    else if (age < 120) {
        can_vote = "You are old enough to vote.";
    }
    else {
        can_vote = "You should be dead."; // facts
    }
    document.getElementById("vote").innerHTML = can_vote; // put the value of can_vote into the vote ¶
}

// ---------------------------------------------------------------------------------------------------------------------------------

function time() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 && time > 0) { // if 0 < time < 12
        reply = "It is morning time, uuuuugh..";
    }
    else if (time >= 12 && time < 18) { // if 12 <= time < 18
        reply = "It is afternoon.";
    }
    else { // 18 <= time <= 24
        reply = "It is evening time.";
    }
    document.getElementById("time").innerHTML = reply;
}
/*
graph of x - 1:

  1 |                     _.`
    |                  _.`
    |               _.`
    |            _.`
  0 +------------------------------------------------
    0           1           2           3           4


graph of x + 1:

  2 |         _.`
    |       ,`
    |    _.`
    | _.`
  1 |`
    |
    |
    |
  0 +------------------------------------------------
    0           1           2           3           4


graph of x * 2:

  1 |    /
    |  ,/
    | /
    |/
  0 +------------------------------------------------
    0           1           2           3           4


graph of x / 2:

  1 |                  _,.'"`
    |            _,.'"`
    |      _,.'"`
    |_,.'"`
  0 +------------------------------------------------
    0           1           2           3           4


graph of x % 2:

  1 |                  _,.'"○                  _,.'"`
    |            _,.'"`                  _,.'"`
    |      _,.'"`                  _,.'"`
    |_,.'"`                 ◙_,.'"`
  0 +------------------------------------------------
    0           1           2           3           4
*/

function tau_function() {
    var tau = Math.PI * 2;
    document.getElementById("math").innerHTML = `
        &#120591; (spelled and pronounced: tau, approximately ${tau.toPrecision(3)}) is a better circle constant than &#120587; (pi, approximately ${Math.PI.toPrecision(3)}). This is because &#120591; represents the full circumference of the ubiquitous unit circle rather than just half of it, like &#120587;. Because of this, fractions of rotations are much easier to mentally compute, for example, three fifths of a turn (or one full rotation) in terms of &#120587; is (6&nbsp;/&nbsp;5)&nbsp;*&nbsp;&#120587;, but with &#120591; it can be expressed as (3&nbsp;/&nbsp;5)&nbsp;*&nbsp;&#120591;. No extra simplification steps! Simply multiply the fraction by &#120591;.<br><br>

        As you can see, with &#120591; you no longer have to deal with continually multiplying and dividing by 2 when working with radian angle measures.<br>
        More intuitive eh?
    `;
}

function add_function() {
    var res = 3 + 9; // adding
    document.getElementById("add").innerHTML = `The result of 3 + 9 is ${res}.`;
}

function sub_function() {
    var res = 3 - 9; // subtracting
    document.getElementById("sub").innerHTML = `The result of 3 - 9 is ${res}.`;
}

function mod_function() {
    var res = 12 % 5; // moduloing (definitely a word)
    document.getElementById("mod").innerHTML = `The result of 12 % 5 is ${res}. Modulotion ftw`;
}

function inc_function() {
    var res = 99;
    res++; // incrementing
    document.getElementById("inc").innerHTML = `The result of 99++ is ${res}.`;
}

function dec_function() {
    var res = 0;
    res--; // decrementing
    document.getElementById("dec").innerHTML = `The result of 0-- is ${res}.`;
}

function rnd_function() {
    var res = Math.random();
    document.getElementById("rnd").innerHTML = `Here's a random number in [0, 1): ${res.toPrecision(3)}`;
}
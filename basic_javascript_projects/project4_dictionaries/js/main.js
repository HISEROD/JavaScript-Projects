var coolnesses = { // create a dictionary to store various coolness ratings
    pi: false,
    tau: true,
    black: true,
    pink: false,
    carbonFiber: true,
    JB: false,
};

delete coolnesses.pi; // nobody really needs pi

function pi_function() {
    // returns undefined since the pi KVP has been deleted
    document.getElementById("dictionary").innerHTML = coolnesses.pi;
}
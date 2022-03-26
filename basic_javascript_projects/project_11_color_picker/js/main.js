function col_func() {
    let col_out;
    let cols = document.getElementById("col_in").value;
    let col_str = " is a great color!";
    let out = document.getElementById("out");
    switch (cols) {
        case "Red":
            col_out = `Red${col_str}`;
            out.style.backgroundColor = "#a22";
            out.style.color = "#ddd";
            break;
        case "Yellow":
            col_out = `Yellow${col_str}`;
            out.style.backgroundColor = "#bc2";
            out.style.color = "black";
            break;
        case "Green":
            col_out = `Green${col_str}`;
            out.style.backgroundColor = "#282";
            out.style.color = "#ddd";
            break;
        case "Blue":
            col_out = `Blue${col_str}`;
            out.style.backgroundColor = "#24a";
            out.style.color = "#ddd";
            break;
        case "Pink":
            col_out = 'Pink had better have a good color compliment.';
            out.style.backgroundColor = "#d49";
            out.style.color = "black";
            break;
        case "Purple":
            col_out = `Purple${col_str}`;
            out.style.backgroundColor = "#43a";
            out.style.color = "#ddd";
            break;
        case "Black":
            col_out = 'Black is the best color of them all.';
            out.style.backgroundColor = "black";
            out.style.color = "#ddd";
            break;
        default:
            col_out = "Please enter a color exactly as written on the above list.";
            out.style.backgroundColor = "#333";
            out.style.color = "#ddd";
    }
    out.innerHTML = col_out;
}
const toggle = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar"
    }

};

console.log("balls");

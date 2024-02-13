function changeStyle() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet.getAttribute("href") === "style/stylentree.css") {
        stylesheet.setAttribute("href", "style/stylentreelight.css");
    } else {
        stylesheet.setAttribute("href", "style/stylentree.css");
    }
}

function changeStylePlats() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet.getAttribute("href") === "style/style3.css") {
        stylesheet.setAttribute("href", "style/styleplatslight.css");
    } else {
        stylesheet.setAttribute("href", "style/style3.css");
    }
}
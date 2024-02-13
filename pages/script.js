function changeStyle() {
    var stylesheet = document.getElementById("stylesheet");
    if (stylesheet.getAttribute("href") === "style/style.css") {
        stylesheet.setAttribute("href", "style/stylelight.css");
    } else {
        stylesheet.setAttribute("href", "style/style.css");
    }
}

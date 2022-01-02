function abrirMenu() {
    document.getElementById("nav").style.display="block";
    document.getElementById("nav").style.animation="backInDown";
    document.getElementById("nav").style.animationDuration="1s";
    document.getElementById("iconMenuCerrado").style.display="block";
    document.getElementById("iconMenu").style.display="none";
}
function cerrarMenu() {
    document.getElementById("iconMenu").style.display="block";
    document.getElementById("iconMenuCerrado").style.display="none";
    document.getElementById("nav").style.display="none";
}

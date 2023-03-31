function cambiaColoreSfondo() {
    let colori = ["#FF5733", "#C70039", "#900C3F", "#581845", "#1B2631"];
    let indiceCasuale = Math.floor(Math.random() * colori.length);
    document.body.style.backgroundColor = colori[indiceCasuale];
}
window.onload = cambiaColoreSfondo;
window.onunload = cambiaColoreSfondo;
window.onbeforeunload = cambiaColoreSfondo;

export default cambiaColoreSfondo
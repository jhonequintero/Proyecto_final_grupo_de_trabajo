function abrirVentanaEmergente(id) {
    // Oculta todas las secciones
    let secciones = document.querySelectorAll(".contenedor_info section");
    secciones.forEach((seccion) => {
        seccion.style.display = "none";
    });

    // Muestra la que corresponde
    let ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "block";
    }
}

function cerrarVentanaEmergente(id) {
    let ventana = document.getElementById(id);
    if (ventana) {
        ventana.style.display = "none";
    }
}

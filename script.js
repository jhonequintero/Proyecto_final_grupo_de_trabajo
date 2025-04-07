// abrir ventana
function abrirPopup(id) {
    let popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "block";
    }
}

// cerrar ventana
function cerrarPopup(id) {
    let popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    }
}


// style particulas 
particlesJS("particles-js", {
    particles: {
      number: {
        // value: 700,
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,         // Las partículas se conectan entre sí
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab" // Este modo hace que el cursor conecte partículas como si las tocara
        },
        onclick: {
          enable: false
        }
      },
      modes: {
        grab: {
          distance: 180, // Distancia a la que el cursor "agarra" partículas
          line_linked: {
            opacity: 1 // Qué tan fuerte se ve la línea del cursor a la partícula
          }
        }
      }
    },
    retina_detect: true
  });




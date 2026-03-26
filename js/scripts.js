const form = document.getElementById('contactForm');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        respuesta.textContent = "⚠️ Por favor completa todos los campos.";
        respuesta.className = "mensaje visible error";
        return;
    }

    try {
        const datos = new FormData(form);
        const respuestaServidor = await fetch("guardar.php", {
            method: "POST",
            body: datos
        });

        const texto = await respuestaServidor.text();
        respuesta.textContent = texto;
        respuesta.className = "mensaje visible ok";
        form.reset();
    } catch (error) {
        respuesta.textContent = "❌ Error al enviar los datos.";
        respuesta.className = "mensaje visible error";
    }

    setTimeout(() => {
        respuesta.classList.remove('visible');
        respuesta.textContent = "";
    }, 4000);
});



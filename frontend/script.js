const API_URL = "http://localhost:3000/videojuegos";

const lista = document.getElementById("lista-videojuegos");

const formulario = document.getElementById("formulario");

let editandoId = null;

async function obtenerVideojuegos() {

    const respuesta = await fetch(API_URL);

    const videojuegos = await respuesta.json();

    lista.innerHTML = "";

    videojuegos.forEach((juego) => {

        lista.innerHTML += `
            <div class="videojuego">

                <h2>${juego.titulo}</h2>

                <p><strong>Género:</strong> ${juego.genero}</p>

                <p><strong>Plataforma:</strong> ${juego.plataforma}</p>

                <p><strong>Año:</strong> ${juego.anio}</p>

                <p><strong>Puntuación:</strong> ${juego.puntuacion}</p>

                <div class="botones">

                    <button class="editar"
                        onclick="editarVideojuego(
                            ${juego.id},
                            '${juego.titulo}',
                            '${juego.genero}',
                            '${juego.plataforma}',
                            ${juego.anio},
                            ${juego.puntuacion}
                        )">
                        Editar
                    </button>

                    <button class="eliminar"
                        onclick="eliminarVideojuego(${juego.id})">
                        Eliminar
                    </button>

                </div>

            </div>
        `;
    });
}

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    const videojuego = {
        titulo: document.getElementById("titulo").value,
        genero: document.getElementById("genero").value,
        plataforma: document.getElementById("plataforma").value,
        anio: document.getElementById("anio").value,
        puntuacion: document.getElementById("puntuacion").value
    };

    if (editandoId) {

        await fetch(`${API_URL}/${editandoId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(videojuego)
        });

        editandoId = null;

    } else {

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(videojuego)
        });
    }

    formulario.reset();

    obtenerVideojuegos();
});

function editarVideojuego(id, titulo, genero, plataforma, anio, puntuacion) {

    document.getElementById("titulo").value = titulo;
    document.getElementById("genero").value = genero;
    document.getElementById("plataforma").value = plataforma;
    document.getElementById("anio").value = anio;
    document.getElementById("puntuacion").value = puntuacion;

    editandoId = id;
}

async function eliminarVideojuego(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    obtenerVideojuegos();
}

obtenerVideojuegos();
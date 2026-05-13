const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "videojuegos_db"
});

db.connect((err) => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conectado a MySQL");
    }
});

app.get("/videojuegos", (req, res) => {
    const sql = "SELECT * FROM videojuegos";

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/videojuegos", (req, res) => {
    const { titulo, genero, plataforma, anio, puntuacion } = req.body;
if (
    !titulo ||
    !genero ||
    !plataforma ||
    !anio ||
    !puntuacion
) {
    return res.status(400).json({
        mensaje: "Todos los campos son obligatorios"
    });
}
    const sql = `
        INSERT INTO videojuegos
        (titulo, genero, plataforma, anio, puntuacion)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [titulo, genero, plataforma, anio, puntuacion],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json({
                    mensaje: "Videojuego agregado"
                });
            }
        }
    );
});

app.put("/videojuegos/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, genero, plataforma, anio, puntuacion } = req.body;

    const sql = `
        UPDATE videojuegos
        SET titulo = ?, genero = ?, plataforma = ?, anio = ?, puntuacion = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [titulo, genero, plataforma, anio, puntuacion, id],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json({
                    mensaje: "Videojuego actualizado"
                });
            }
        }
    );
});

app.delete("/videojuegos/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM videojuegos WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({
                mensaje: "Videojuego eliminado"
            });
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});

// ===========================================
// Contexto histórico del proyecto
// River le ganó a Boca en Madrid en 2018 en
// la final de la Copa Libertadores.
// ===========================================
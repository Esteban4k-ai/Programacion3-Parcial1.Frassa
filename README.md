# 🎮 Biblioteca Gamer - Gestor de Videojuegos

Biblioteca Gamer es una aplicación Full Stack desarrollada para administrar una colección personal de videojuegos.  
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los registros almacenados en una base de datos MySQL mediante una API REST construida con Node.js y Express.

---

# 🚀 Tecnologías Utilizadas

## Backend
- Node.js
- Express.js
- MySQL
- mysql2
- CORS

## Frontend
- HTML5
- CSS3
- JavaScript Vanilla
- Fetch API

---

# 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- Node.js
- XAMPP o MySQL Server
- Visual Studio Code (Recomendado)
- Extensión Live Server (Opcional)

---

# 🛠️ Instalación y Configuración

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Configurar la Base de Datos

Abrir phpMyAdmin o MySQL Workbench y ejecutar el siguiente script:

```sql
CREATE DATABASE videojuegos_db;

USE videojuegos_db;

CREATE TABLE videojuegos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    plataforma VARCHAR(50) NOT NULL,
    anio INT(4) NOT NULL,
    puntuacion DECIMAL(3,1) NOT NULL,
    PRIMARY KEY (id)
);
```

---

## 3. Instalar dependencias del Backend

Abrir una terminal dentro de la carpeta:

```bash
backend
```

Ejecutar:

```bash
npm install
```

---

## 4. Verificar conexión MySQL

En el archivo:

```bash
backend/index.js
```

Verificar los datos de conexión:

```js
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "videojuegos_db"
});
```

Modificar el password si tu MySQL utiliza contraseña.

---

# ▶️ Cómo Ejecutar el Proyecto

## 1. Iniciar XAMPP

Activar:
- Apache
- MySQL

---

## 2. Ejecutar el Backend

Abrir terminal dentro de:

```bash
backend
```

Ejecutar:

```bash
node index.js
```

o:

```bash
npm start
```

Debería aparecer:

```bash
Conectado a MySQL
Servidor corriendo en puerto 3000
```

---

## 3. Ejecutar el Frontend

Abrir:

```bash
frontend/index.html
```

Se recomienda utilizar la extensión Live Server de Visual Studio Code.

---

# 💡 Funcionalidades

- Mostrar videojuegos almacenados en MySQL
- Agregar nuevos videojuegos
- Editar videojuegos existentes
- Eliminar videojuegos
- Validación de formularios
- Comunicación entre frontend y backend mediante Fetch API
- Persistencia de datos mediante MySQL

---

# 🧠 Decisiones Técnicas

- Se utilizó una arquitectura separada entre frontend y backend para mantener una estructura modular y organizada.
- Express.js fue elegido por su simplicidad para construir APIs REST.
- MySQL fue utilizado como base de datos relacional para almacenar información persistente.
- Fetch API permitió consumir la API REST desde JavaScript Vanilla sin librerías externas.
- Se implementaron validaciones básicas tanto en frontend como backend para evitar datos inválidos.

---

# 📌 Endpoints de la API

## Obtener videojuegos
```http
GET /videojuegos
```

## Crear videojuego
```http
POST /videojuegos
```

## Actualizar videojuego
```http
PUT /videojuegos/:id
```

## Eliminar videojuego
```http
DELETE /videojuegos/:id
```

---

# 👨‍💻 Autor

Desarrollado por Esteban - 2026

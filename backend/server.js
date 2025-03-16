
/**
 * CONFIGURANDO EL SERVIDOR.....
 */


// Importamos Express para crear el servidor
import express from "express";
// Importamos CORS para permitir solicitudes desde diferentes orígenes (necesario para frontend-backend)
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRoute from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"

// Creamos una instancia de la aplicación Express
const app = express();
// Definimos el puerto en el que correrá el servidor
const port = 4000;

// Middleware para habilitar el uso de JSON en las solicitudes
app.use(express.json());
// Middleware para permitir solicitudes desde otros dominios (CORS)
app.use(cors());

//db coneccion
connectDB();

//Api endpoints
app.use("/api/food", foodRoute);

app.use("/images",express.static("uploads")) //para mostrar las imagenes en uploads
app.use("/api/user", userRouter);

// Ruta principal: responde con un mensaje cuando se accede a "/"
app.get("/", (req, res) => {
  res.send("API Working"); // Responde con un mensaje simple para verificar que la API está en funcionamiento
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port} `); // Mensaje en consola indicando que el servidor está en ejecución
});

// mongodb+srv://DJRojasR:<db_password>@cluster0.8qqyr.mongodb.net/?

// mongodb+srv://DJRojasR:<db_password>@cluster0.8qqyr.mongodb.net/?

/**
 */
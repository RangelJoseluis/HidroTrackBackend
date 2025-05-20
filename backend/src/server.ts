import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/database";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("Error al conectar a la base de datos:", error.message);
    } else {
      console.error("Error desconocido al conectar a la base de datos:", error);
    }
  });
import express from "express";
import mongoose from 'mongoose';
import { UserRouter } from "./user/infraestructura/router/UserRouter";

const startServer = async (): Promise<void> => {
  try {
    // Conexión a MongoDB
    await mongoose.connect('mongodb://localhost:27017/Hexagona1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as mongoose.ConnectOptions);
    // Enrutadores
    const userRouter = new UserRouter();

    // Configuración de Express
    const app = express();
    app.use(express.json());

    // Rutas
    app.use("/user", userRouter.configureRoute());

    // Configuración del puerto
    const port = 4000;

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor en el puerto: ${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();

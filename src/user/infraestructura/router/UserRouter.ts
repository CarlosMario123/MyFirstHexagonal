import express, { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
export class UserRouter{
   private crearUser: CreateUserController;

   constructor(){
     this.crearUser = new CreateUserController()
   }

   configureRoute():Router{//metodo que controla las rutas o endpoints
       const router = express.Router();
       router.post("/crear",this.crearUser.crearUser.bind(this.crearUser))
        return router;
   }
}
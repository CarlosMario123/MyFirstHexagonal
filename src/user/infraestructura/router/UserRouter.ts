import express, { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { FindIdUserContoller } from '../controllers/FindIdUserController';
import { GetAllUserContoller } from '../controllers/GetAllUserController';
export class UserRouter{
   private crearUser: CreateUserController;
   private findUser: FindIdUserContoller;
   private getAllUser: GetAllUserContoller;

   constructor(){
     this.crearUser = new CreateUserController()
     this.findUser = new FindIdUserContoller();
     this.getAllUser = new GetAllUserContoller();
   }

   configureRoute():Router{//metodo que controla las rutas o endpoints
       const router = express.Router();
       router.get("/",this.getAllUser.getAll.bind(this.getAllUser));
       router.post("/crear",this.crearUser.crearUser.bind(this.crearUser))
       router.get("/:id",this.findUser.findUser.bind(this.findUser))
        return router;
   }
}
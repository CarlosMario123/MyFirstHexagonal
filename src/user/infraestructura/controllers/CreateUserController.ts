import { Request,Response } from "express";
import { CreateUserCase } from "../../aplicacion/useCases/createUserCase";
import { MongooseUserRepository } from "../adapters/mongooseAdapter";
import { CreateUserRequestDTO } from "../../dominio/dto/CreateUserRequestDTO";
import { CreateUserResponseDTO } from "../../dominio/dto/CreateUserResponseDTO";
import { ErrorResponseDTO } from "../../dominio/dto/ErrorResponseDTO";
export class CreateUserController{

    private usarCasoUser:CreateUserCase;
    constructor(){
        //procedemos a adaptar 
        this.usarCasoUser = new CreateUserCase(new MongooseUserRepository());
    }

    //Creamos nuestro controlador para crear Usuario
    async crearUser(req: Request, res: Response) :Promise<void> {
        const { name, email } = req.body as CreateUserRequestDTO;

        try {
            await this.usarCasoUser.execute(name, email);
            const response: CreateUserResponseDTO = { message: 'usuario creado exitosamente' };
            res.status(201).json(response);
          } catch (error) {
            console.error(error);
            const response: ErrorResponseDTO = { error: 'error al crear el usuario' };
            res.status(500).json(response);
          }
    }
}
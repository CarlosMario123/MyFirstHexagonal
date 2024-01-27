import { MongooseUserRepository } from "../adapters/mongooseAdapter";
import { ErrorResponseDTO } from "../../dominio/dto/ErrorResponseDTO";
import { Request,Response } from "express";
import { GetAllUser } from "../../aplicacion/useCases/getAllUserCase";
import { GetAllUserDto } from "../../dominio/dto/getAllUserResponseDto";

export class GetAllUserContoller{
     
     private getAllUser : GetAllUser;

    constructor(){ //otra adaptacion mas? 
      this.getAllUser = new GetAllUser(new MongooseUserRepository());
    }

   
    async getAll(req: Request, res: Response):Promise<void> {
        
    try {
        const users = await this.getAllUser.execute();
        if (users) {
          const response: GetAllUserDto = { users};
          res.status(200).json(response);
        } else {
          const response: ErrorResponseDTO = { error: 'No se pudo traer a los usuarios' };
          res.status(404).json(response);
        }
      } catch (error) {
        console.error(error);
        const response: ErrorResponseDTO = { error: 'Internal Server Error' };
        res.status(500).json(response);
      }
    }
}   
import { MongooseUserRepository } from "../adapters/mongooseAdapter";
import { ErrorResponseDTO } from "../../dominio/dto/ErrorResponseDTO";
import { Request,Response } from "express";
import { FindIdUserCase } from "../../aplicacion/useCases/FindIdUserCase";
import { FindUserResponseDTO } from "../../dominio/dto/FindUserReponseDTO";
export class FindIdUserContoller{
    private usarCasoUser :FindIdUserCase;
    constructor(){
      //procedemos adaptarDeNuevo
      this.usarCasoUser = new FindIdUserCase(new MongooseUserRepository())
    }

    async findUser(req: Request, res: Response): Promise<void> {
        const userId = req.params.id as string;
      
    
        try {
          const user = await this.usarCasoUser.execute(userId);
          if (user) {
            const response: FindUserResponseDTO = { user };
            res.status(200).json(response);
          } else {
            const response: ErrorResponseDTO = { error: 'User not found' };
            res.status(404).json(response);
          }
        } catch (error) {
          console.error(error);
          const response: ErrorResponseDTO = { error: 'Internal Server Error' };
          res.status(500).json(response);
        }
      }
}
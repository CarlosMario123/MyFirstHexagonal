
import { UserRepository } from "../../dominio/repositorio/userRepository";
import { User } from "../../dominio/entidad/user";
export class FindIdUserCase{
    constructor(private userRepository: UserRepository){}


    async execute(id:string):Promise<User | null>{
    const data = await this.userRepository.findById(id);
    return data;
    }
}
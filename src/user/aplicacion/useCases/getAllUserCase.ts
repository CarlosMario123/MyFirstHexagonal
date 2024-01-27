import { UserRepository } from "../../dominio/repositorio/userRepository";
import { User } from "../../dominio/entidad/user";

export class GetAllUser{
    constructor(private userRepository: UserRepository){}


    async execute():Promise<User[] | null>{
    const data = await this.userRepository.getAll();
    return data;
    }
}
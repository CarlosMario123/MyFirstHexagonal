import { User } from "../../dominio/entidad/user";
import { UserRepository } from "../../dominio/repositorio/userRepository";

export class CreateUserCase{
//este caso de uso usara el save de userRepository
//asu vez el parametro sera una clase que use esa interfaz
//en este ejemplo le pasaremos el de mongoseAdapte
    constructor(private userRepository: UserRepository){}

    async execute(name:string,email:string){
        const user = new User("",name,email);

        await this.userRepository.save(user);
    }
}
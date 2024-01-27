import { User } from "../entidad/user";

export interface UserRepository {
    save(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    getAll():Promise<User[] | null>;
  }
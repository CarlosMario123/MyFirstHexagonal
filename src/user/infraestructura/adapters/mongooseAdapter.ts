
import mongoose, { Document, Schema, Model } from 'mongoose';
import { User } from '../../dominio/entidad/user';
import { UserRepository } from '../../dominio/repositorio/userRepository';

interface UserDocument extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema<UserDocument>({
  name:  { type: String, required: true },
  email:  { type: String, required: true,unique: true },
});

const UserModel: Model<UserDocument> = mongoose.model('User', userSchema);

export class MongooseUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    const userModel = new UserModel(user);
    await userModel.save();
  }

  async findById(id: string): Promise<User | null> {
    const foundUser = await UserModel.findById(id);
    return foundUser ? new User(foundUser.id, foundUser.name, foundUser.email) : null;
  }
}

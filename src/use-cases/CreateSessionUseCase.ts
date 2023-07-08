import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories";

type UserRequest = {
    email: string;
    password: string;
};

export class CreateSessionUseCase {
  async execute({ email, password }: UserRequest) {

    const user = await UserRepository.findOneBy({ email });

    if (!user) {
      return new Error("User does not exists!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return new Error("Email or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id,
    });

    return { token };
  }
}
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const signupUser = async ({ mail, password, name }: User) => {
    const checkIs = await UserModel.findOne({ mail });
    if(checkIs)  return "ALREADY_USER";

    const registerNewUser = await UserModel.create({ mail, password, name })

    return registerNewUser;
};

const loginUser = async () => {

};

export { signupUser, loginUser };
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt_handle";

const signupUser = async ({ mail, password, name, comments }: User) => {
    const checkIs = await UserModel.findOne({ mail });
    if(checkIs)  return "ALREADY_USER";

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ mail, password: passHash , name, comments });

    return registerNewUser;
};

const loginUser = async () => {

};

export { signupUser, loginUser };
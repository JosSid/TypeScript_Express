import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt_handle";

const signupUser = async ({ mail, password, name, comments }: User) => {
    const checkIs = await UserModel.findOne({ mail });
    if(checkIs)  return "ALREADY_USER";

    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({ mail, password: passHash , name, comments });

    return registerNewUser;
};

const loginUser = async ({mail, password}:Auth) => {
    const checkIs = await UserModel.findOne({ mail });
    if(!checkIs)  return "NOT_USER_IN_DB";

    const passwordHash = checkIs.password;
    const checkPasswords = await verified(password, passwordHash);

    if(!checkPasswords) return "PASSWORD_INCORRECT";

    return checkIs;
};

export { signupUser, loginUser };
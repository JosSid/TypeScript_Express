import {hash, compare} from "bcryptjs"

const encrypt = async(pass:string) => {
    const passwordHash = await hash(pass, 7);
    return passwordHash
};

const verified = async(pass:string, passHash:string) => {
    const comparePassword = await compare(pass, passHash);
    return comparePassword;
};

export { encrypt, verified };
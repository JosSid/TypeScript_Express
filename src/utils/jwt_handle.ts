import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || '0]+?67&poi'
const generateToken = async(id:string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2d"
    });
    return jwt
};

const verifyToken = async() => {};

export { generateToken, verifyToken };

import { Request, Response } from "express";
import { signupUser, loginUser } from "../services/authService";
const signupController = async ({body}: Request, res: Response) => {
    const responseUser = await signupUser(body)
};

const loginController = async (req: Request, res: Response) => {

};

export { signupController, loginController};
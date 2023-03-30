import { Request, Response } from 'express';
import { signupUser, loginUser } from '../services/authService';
import { handleHttp } from '../utils/error_handle';
const signupController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await signupUser(body);
    if(responseUser === "ALREADY_USER"){
        res.status(409).json({error: responseUser});
        return;
    }
    res.status(201).json({ data: responseUser });
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_ITEM', error);
  }
};

const loginController = async (req: Request, res: Response) => {};

export { signupController, loginController };

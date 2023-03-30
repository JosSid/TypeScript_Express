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
    handleHttp(res, 'ERROR_CREATE_USER', error);
  }
};

const loginController = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await loginUser(body);
        if(responseUser === "NOT_USER_IN_DB"){
            res.status(400).json({error: responseUser});
            return;
        }
        if(responseUser === "PASSWORD_INCORRECT"){
            res.status(403).json({error: responseUser});
            return;
        }
        res.status(200).json({ data: responseUser });
      } catch (error) {
        handleHttp(res, 'ERROR_CREATE_USER', error);
      }
};

export { signupController, loginController };

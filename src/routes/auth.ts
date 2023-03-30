import { Request, Response, Router } from "express";
import { loginController, signupController} from "../controllers/auth";

const router = Router();
/**http://localhost:3002/auth/<register || login> [POST]*/
router.post("/signup", signupController);
router.post("/login", loginController);

export { router };
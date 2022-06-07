import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deletUser.controller";
import listUserController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmmiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.post("/login", userLoginController);
router.get("", listUserController);
router.put("/:uuid", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController);
export default router;

import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";




const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.get("/get_all_activity",getUserHistory);
router.post("/add_to_activity",addToHistory);




export default router;
import {Router} from "express";
import * as Controller from "./controllers"

const clienteRouter = Router();

clienteRouter.route("/").get(Controller.findAll);

export default clienteRouter;
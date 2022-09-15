import express from "express";
import cors from "cors";
import { cliente } from "./components"
import { product } from "./components";

export const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use("/cliente", cliente)
//agregado
app.use("/producto", product);
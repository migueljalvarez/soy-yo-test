import express from "express";
import api from "./routers/index";
const app = express();
app.use(express.json())
app.use(api);


export { app };

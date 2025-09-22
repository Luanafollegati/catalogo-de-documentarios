import express from "express";
import dotenv from "dotenv";
import documentariosRoutes from "./src/routes/documentariosRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 4005;

app.get("/", (req,res)=> {
    res.send("servidor funcionando")
});

//rotas
app.use ("/documentarios", documentariosRoutes)

app.listen(serverPort, () => {
    console.log(`servidor rodando em http://localhost:${serverPort}`);
});
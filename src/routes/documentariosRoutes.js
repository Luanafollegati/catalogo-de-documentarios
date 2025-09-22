import express from "express";
import { getAllDocumentarios, getDocumentariosById } from "../controllers/documentariosController.js";


const router = express.Router();

router.get("/", getAllDocumentarios);
router.get("/:id", getDocumentariosById);

export default router;

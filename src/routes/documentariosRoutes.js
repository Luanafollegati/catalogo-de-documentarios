import express from "express";
import { createDocumentarios, getAllDocumentarios, getDocumentariosById, deleteDocumentarios } from "../controllers/documentariosController.js";


const router = express.Router();

router.get("/", getAllDocumentarios);
router.get("/:id", getDocumentariosById);
router.post("/", createDocumentarios);
router.delete("/:id", deleteDocumentarios);

export default router;

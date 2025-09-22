import express from "express";
import { createDocumentarios, getAllDocumentarios, getDocumentariosById, createDocumentarios } from "../controllers/documentariosController.js";


const router = express.Router();

router.get("/", getAllDocumentarios);
router.get("/:id", getDocumentariosById);
router.post("/", createDocumentarios);

export default router;

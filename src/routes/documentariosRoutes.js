import express from "express";
import { createDocumentarios, getAllDocumentarios, getDocumentariosById, deleteDocumentarios, updateDocumentario } from "../controllers/documentariosController.js";


const router = express.Router();

router.get("/", getAllDocumentarios);
router.get("/:id", getDocumentariosById);
router.post("/", createDocumentarios);
router.delete("/:id", deleteDocumentarios);
router.put("/:id", updateDocumentario)

export default router;

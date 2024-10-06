import { Router } from "express";
import { deleteNote, getAllNotes, getOneNote, postAllNotes, updateNote } from "../controllers/notes-controllers.js";

export const noteRouter = Router()
noteRouter.get('/notes', getAllNotes)
noteRouter.get('/notes/:id', getOneNote)
noteRouter.post('/notes', postAllNotes)
noteRouter.patch('/notes/:id', updateNote)
noteRouter.delete('/notes/:id', deleteNote)


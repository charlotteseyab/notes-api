import { note } from "../models/notes-model.js";


export const getAllNotes = async (req, res, next) => {
   try {
     const newNote = new note(req.body)
     const notes = await newNote.save()
     res.status(200).json(notes)
   } catch (error) {
    next(error);
   }
}
export const getOneNote = async (req, res, next) => {
   try {
     const newNote = new note(req.body)
     const notes = await newNote.save()
     res.status(200).json(notes)
   } catch (error) {
    next(error);
   }
}
export const postAllNotes = async (req, res, next) => {
   try {
     const newNote = new note(req.body)
     const notes = await newNote.save()
     res.status(200).json(notes)
   } catch (error) {
    next(error);
   }
}
export const updateNote = async (req, res, next) => {
   try {
     const newNote = new note(req.body)
     const notes = await newNote.save()
     res.status(200).json(notes)
   } catch (error) {
    next(error);
   }
}
export const deleteNote = async (req, res, next) => {
   try {
     const newNote = new note(req.body)
     const notes = await newNote.save()
     res.status(200).json(notes)
   } catch (error) {
    next(error);
   }
}


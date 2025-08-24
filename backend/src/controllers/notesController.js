import Note from "../models/Note.js";

export async function getAllNotes(_, res) {//skip req by _
    try {

        const notes = await Note.find().sort({ createdAt: -1 });//-1 means show new one
        res.status(200).json(notes)

    } catch (error) {
        console.error("Erorr in getAllNotese conroller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "note not found" })
        res.json(note)
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}


export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content })
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Erorr in getAllNotese conroller", error)
    }
}



export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true })
        if (!updatedNote) return res.status(404).json({ message: "Note not found" })
        res.status(200).json(updatedNote)

    } catch (error) {
        console.error("Erorr in update conroller", error)
    }
}

export async function deleteNote(req, res) {
    try {

        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNote) return res.status(404).json({ message: "Note not found" })
        res.status(200).json({ message: "Deleted successfually" })
    } catch (error) {
        console.error("Erorr in delete conroller", error)
    }
}

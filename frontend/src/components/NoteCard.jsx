import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'
const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault(); //get ride of navigation behaviour
        if (!window.confirm("Are you shoure you want to delete this note?")) return;


        try {
            api.delete(`/notes/${id}`);
            toast.success("Note Deleted successfully")
            setNotes((prev) => prev.filter(note => note._id !== id)) //get rid of delted one from array
        } catch (error) {
            console.log("delted error", error)
            toast.error("Failed to delete note")
        }
    }
    return (
        <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#4E71FF]">
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-sm text-base-content/60'>{formatDate(note.createdAt)}</span>
                    <div className='flex items-center gap-1'>
                        <PenSquareIcon className="size-4" />
                        <button className='btn btn-ghoost btn-xs text-error' onClick={(e) => handleDelete(e, note._id)}><Trash2Icon className='size-4' /></button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard
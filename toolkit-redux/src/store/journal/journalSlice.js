import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journalSlice",
    initialState: {
        isSaving: true,
        messageSaved: "",
        notes: [],
        active: null,
        // active: {
        //     id: "",
        //     title: "",
        //     body: "",
        //     date: 1232313213,
        //     imageUrl: [],
        // },
    },
    reducers: {
        addNewEmptyNote: (state, action) => {},
        setActiveNote: (state, action) => {},
        setNotes: (state, action) => {},
        setSaving: (state, action) => {},
        uptdateNote: (state, action) => {},
        deleteNoteById: (state, action) => {},
    },
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    uptdateNote,
    deleteNoteById,
} = journalSlice.actions;

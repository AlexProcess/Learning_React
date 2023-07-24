import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
    title: "croissant con fokin cafe",
    notes: "hay que comprar el pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "fafafa",
    user: {
        _id: "123",
        name: "alex",
    },
};

export const calendarSlice = createSlice({
    name: "calendarSlice",
    initialState: {
        events: [tempEvent],
        activeEvents: null,
    },
    reducers: {},
});

export const {} = calendarSlice.actions;

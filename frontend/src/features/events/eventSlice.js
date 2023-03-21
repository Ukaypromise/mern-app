import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
    events: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        reset: (state) => initialState,
        // Add Event
        addEvent: (state, action) => {
            state.events.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        // Get Events
        builder.addCase("event/getEvents/pending", (state) => {
            state.isLoading = true;
        });
        builder.addCase("event/getEvents/fulfilled", (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.events = action.payload;
        });
        builder.addCase("event/getEvents/rejected", (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        // Delete Event
        builder.addCase("event/deleteEvent/pending", (state) => {
            state.isLoading = true;
        });
        builder.addCase("event/deleteEvent/fulfilled", (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.events = state.events.filter((event) => event._id !== action.payload);
        });
        builder.addCase("event/deleteEvent/rejected", (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset, addEvent } = eventSlice.actions;
export default eventSlice.reducer;

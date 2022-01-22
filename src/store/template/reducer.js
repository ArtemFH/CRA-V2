import {createSlice} from "@reduxjs/toolkit";
import {template} from "./actions";

const initState = {
    errors: false
};

export const templateReducer = createSlice({
    name: 'template',
    initialState: initState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(template, (state, action) => {
            state.errors = false;
        })
    })
})
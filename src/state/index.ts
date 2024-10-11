import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export interface InitialStateTypes{
    isSidebarCollapsed: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) =>{
            state.isSidebarCollapsed = action.payload;
        },
    },
})

export const {setIsSidebarCollapsed} = globalSlice.actions;

export default globalSlice.reducer;
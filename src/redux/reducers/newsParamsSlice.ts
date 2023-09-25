import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAllNews } from "../actions/newsActions";
import INews from "../../app/models/INews";
import { act } from "react-dom/test-utils";

interface NewsParamsState {
    params: {
        page: number
        size: number
        query?: string
        orderBy?: string
    }
}

const initialState: NewsParamsState = {
    params: {
        page: 1,
        size: 10,
        query: '',
        orderBy: ''
    }
}

const paramsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.params.page = action.payload
        },
        changeSize: (state, action) => {
            state.params.size = action.payload
        },
        changeQuery: (state, action) => {
            state.params.query = action.payload
        },
        changeOrder: (state, action) => {
            state.params.orderBy = action.payload
        },
    }
});
  
export const {changePage, changeSize, changeQuery, changeOrder} = paramsSlice.actions;

export default paramsSlice.reducer
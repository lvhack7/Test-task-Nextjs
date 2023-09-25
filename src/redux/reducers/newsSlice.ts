import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAllNews } from "../actions/newsActions";
import INews from "../../app/models/INews";

interface NewsListState {
    newsList: INews[]
    loading: boolean
    error: string
}

const initialState: NewsListState = {
    newsList: [],
    loading: false,
    error: ''
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllNews.pending.type]: (state) => {
          state.loading = true
        },
        [fetchAllNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
          state.loading = false;
          state.error = ''
          state.newsList = action.payload;
        },
        [fetchAllNews.rejected.type]: (state, action: PayloadAction<string>) => {
          state.loading = false
          state.error = action.payload
        }
    },
});
  
export default newsSlice.reducer;
import { createAsyncThunk } from '@reduxjs/toolkit';

interface FetchDataPayload {
	page: number;
	size: number;
	query?: string;
	orderBy?: string
}

export const fetchAllNews = createAsyncThunk<any, FetchDataPayload>('news/fetchNews', async ({page, size, query, orderBy}, thunkAPI) => {
    try {
		console.log(page, size)
		const response = await fetch(
			`https://content.guardianapis.com/search?api-key=5879ea0f-c3a2-4a60-b17e-9736f13b3525&show-fields=thumbnail&page=${page}&page-size=${size}${query ? `&q=${query}` : ''}${orderBy ? `&order-by=${orderBy}` : ''}`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
				  'Content-Type': 'application/json',
				},
			}
		);
		const data = await response.json();
		return data.response.results;
    } catch(e) {
		return thunkAPI.rejectWithValue("Не удалось загрузить новости")
	}
})

// export const fetchSortedNews = createAsyncThunk('news/fetchNews', async (order, thunkAPI) => {
//     try {
// 		// const response = fetch(`https://content.guardianapis.com/search?api-key=9833b6a9-6504-4476-a7da-b00d2218a6a8&show-fields=thumbnail&order-by=${order}`);
// 		// response.then(response => {
// 		// 	return response.json()
// 		// }).then(data => {
// 		// 	return data.response.results
// 		// })
// 		const response = await fetch(`https://content.guardianapis.com/search?api-key=9833b6a9-6504-4476-a7da-b00d2218a6a8&show-fields=thumbnail&order-by=${order}`);
// 		const data = await response.json();
// 		return data.response.results;
//     } catch(e) {
// 		return thunkAPI.rejectWithValue("Не удалось загрузить новости")
// 	}
// })

// export const fetchNewsById = createAsyncThunk('news/fetchById', async (id, thunkAPI) => {
// 	try {
// 		// const response = fetch(`https://content.guardianapis.com/${id}?api-key=9833b6a9-6504-4476-a7da-b00d2218a6a8&show-fields=thumbnail`);
// 		// response.then(response => {
// 		// 	return response.json()
// 		// }).then(data => {
// 		// 	return data.response.content
// 		// })
// 		const response = await fetch(`https://content.guardianapis.com/${id}?api-key=9833b6a9-6504-4476-a7da-b00d2218a6a8&show-fields=thumbnail`)
// 		const data = await response.json()
// 		return data.response.content
// 	} catch(e) {
// 		return thunkAPI.rejectWithValue("Не удалось загрузить новость")
// 	}
// })

// https://i.guim.co.uk/img/media/119bcd03620de0b10e736eaa526d8093f592b9b6/0_179_3900_2341/master/3900.jpg?width=700&dpr=2&s=none

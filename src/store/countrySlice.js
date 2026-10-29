import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountryList = createAsyncThunk('country/fetch', async () => {
    const response = await fetch("https://www.saltpixels.in/api_2/admin/country/list", {
        method: "POST",
        headers: {},
        body: JSON.stringify({
            master_user_id: "1",
        })
    });
    const result = await response.json();
    const filtered = result.data.filter((country) => country.phonecode !== "92");

    return filtered || [];
});

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countryList: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountryList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countryList = action.payload;
            })
            .addCase(fetchCountryList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default countrySlice.reducer;

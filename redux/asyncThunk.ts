import {createAsyncThunk} from "@reduxjs/toolkit";
import {imagesApi} from "@/server/imagesApi";

export const fetchModels = createAsyncThunk(
    'models/fetchModels',
    async () => await imagesApi.getAll()
);

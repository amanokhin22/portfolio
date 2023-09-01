import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchModels} from "./asyncThunk";
import {WitcherSliceState} from "@/app/witcher/types/WitcherTypes";

const initialState: WitcherSliceState = {
    models: [],
    loading: false,
    activeModelsId: "",
    pageSize: 3,
    page: 1,
};

const witcherSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setActiveModelsId(state, action: PayloadAction<string>) {
            state.activeModelsId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchModels.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchModels.fulfilled, (state, action) => {
            state.models = action.payload;
            state.loading = false;
        });
    },
})

export const {setActiveModelsId} = witcherSlice.actions;

export default witcherSlice.reducer;

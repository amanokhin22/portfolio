import {configureStore} from "@reduxjs/toolkit";
import witcherSliceReducer from "@/redux/witcherSlice";

export const store = configureStore({
    reducer: {
        models: witcherSliceReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

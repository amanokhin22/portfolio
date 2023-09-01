import {RootState} from "@/store/store";
import {createSelector} from "reselect";

export const selectModels = (state: RootState) => state.models;

export const selectModelsList = createSelector(selectModels, (model) => model.models);

export const selectActiveModelsId = createSelector(selectModels, (model) => model.activeModelsId);

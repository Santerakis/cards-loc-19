import {RootState} from "./store";

export const selectIsLoading = (state: RootState) => state.app.isLoading
// export const isLoadingSelector = (state: RootState) => state.app.isLoading
export const selectIsAppInitialized = (state: RootState) => state.app.isAppInitialized

export const selectApp = {selectIsLoading, selectIsAppInitialized}
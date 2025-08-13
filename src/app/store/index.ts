import { configureStore } from "@reduxjs/toolkit";
import countryApi from "../../shared/api/country-api";

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

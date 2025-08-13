import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Country = {
    cca2: string;
    name: { common: string };
    flags: { svg: string; png: string };
};

const countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
    endpoints: (builder) => ({
        getCountry: builder.query<Country[], void>({
            query: () => `all?fields=cca2,name,flags`,
        }),
    }),
});

export default countryApi;
export const { useGetCountryQuery } = countryApi;

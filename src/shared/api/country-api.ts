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
        // Все страны
        getCountries: builder.query<Country[], void>({
            query: () => `all?fields=cca3,name,flags,region`,
        }),

        // По коду
        getCountryByCode: builder.query<Country[], string>({
            query: (code) => `alpha/${code}?fields=cca3,name,flags,region`,
        }),

        // 📌 По региону
        getCountriesByRegion: builder.query<Country[], string>({
            query: (region) => `region/${region}?fields=cca3,name,flags,region`,
        }),
    }),
});

export default countryApi;
export const { useGetCountriesQuery, useGetCountryByCodeQuery, useGetCountriesByRegionQuery } = countryApi;

import React, { useState } from "react";
import { useGetCountriesQuery } from "../shared/api/country-api";

import CountryList from "../widgets/country-list/CountryList";
import CountryFilterByRegion from "../features/CountryFilterByRegion/CountryFilterByRegion";

import "@/shared/styles/App.scss";

function App() {
    const { data, isLoading, error } = useGetCountriesQuery();
    console.log(data);

    return (
        <>
            <div>{isLoading ? <p>Loadind...</p> : <CountryList data={data} />}</div>
            <CountryFilterByRegion />
        </>
    );
}

export default App;

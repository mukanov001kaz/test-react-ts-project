import React, { useState } from "react";
import CounterList from "../widgets/counter-list/CounterList";
import viteLogo from "@/shared/assets/vite.svg";
import { useGetCountryQuery } from "../shared/api/country-api";
import "@/shared/styles/App.scss";

function App() {
    const { data, isLoading, error } = useGetCountryQuery();

    return (
        <>
            <h1>Hello React</h1>
            <img className="header" src={viteLogo} alt="" />
            <img src={viteLogo} alt="" />
            {isLoading ? <p>Loadind...</p> : <CounterList data={data} />}
        </>
    );
}

export default App;

import React, { useState } from "react";
import { useGetCountriesByRegionQuery } from "../../shared/api/country-api";

const CountryFilterByRegion = () => {
    const [region, setRegion] = useState("asia");
    const { data, isLoading, error } = useGetCountriesByRegionQuery(region);

    return (
        <div>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>

            {isLoading && <p>Загрузка...</p>}
            {error && <p>Ошибка загрузки</p>}

            <ul>
                {data?.map((country) => (
                    <li key={country.cca2} className="country__region">
                        <div>{country.name.common}</div>
                        <img src={country.flags.png} alt={country.name.common} width={30} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryFilterByRegion;

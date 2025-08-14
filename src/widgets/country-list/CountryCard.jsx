import React from "react";

const CountryCard = ({ item }) => {
    const { name, flags } = item;

    return (
        <div>
            <h1>{name.common}</h1>
            <img src={flags.png} alt={name} />
        </div>
    );
};

export default CountryCard;

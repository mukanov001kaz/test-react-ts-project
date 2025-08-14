import React from "react";

const CountryCard = ({ item }) => {
    const { name, flags } = item;
    console.log(item);

    return (
        <div>
            <h1>{name.official}</h1>
            <img src={flags.png} alt={name} />
        </div>
    );
};

export default CountryCard;

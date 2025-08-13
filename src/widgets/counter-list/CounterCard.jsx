import React from "react";

const CounterCard = ({ item }) => {
    const { name, flags } = item;
    console.log(item);

    return (
        <div>
            <h1>{name.official}</h1>
            <img src={flags.png} alt={name} />
        </div>
    );
};

export default CounterCard;

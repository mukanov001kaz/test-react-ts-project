import React from "react";
import CounterCard from "./counterCard";

const CounterList = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map((item, index) => (
                <CounterCard key={index} item={item} />
            ))}
        </div>
    );
};

export default CounterList;

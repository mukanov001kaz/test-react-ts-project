import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { pagination } from "../../shared/lib/Paginaton";

const CountryList = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const currentData = pagination(data ?? [], currentPage, itemsPerPage);
    const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

    return (
        <div className="container ">
            <div className="country__list">
                {currentData.map((item, index) => (
                    <CountryCard key={index} item={item} />
                ))}
            </div>
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CountryList;

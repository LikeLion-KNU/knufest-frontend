import { useState } from "react";

import { ButtonWrapper } from "./Pagenation.styled";

const Pagenation = () => {
    const [pagenum] = useState<number>(5);

    const pageNumbers = Array.from(Array(pagenum).keys());

    return (
        <>
            <div>left</div>
            <ButtonWrapper>
                {pageNumbers.map((pageNumber) => (
                    <button key={pageNumber}>{pageNumber + 1}</button>
                ))}
            </ButtonWrapper>
            <div>right</div>
        </>
    );
};

export default Pagenation;

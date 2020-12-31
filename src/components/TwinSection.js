import React from "react";
import styled from "styled-components";

const TwinSectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export default function TwinSection(props) {
    console.log(props.children);
    return (
        <TwinSectionContainer>
            {props.children.map(child => {
                return ( React.cloneElement(child));
            })}
        </TwinSectionContainer>
    );
}

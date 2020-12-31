import React from "react";
import styled from "styled-components";

import {
    lavendar,
    cornflowerBlue,
    olivine,
    froly,
    corvette
} from "../GlobalStyles";

const SectionContianer = styled.section`
    text-align: ${props => props.align};
    ${({ align }) =>
        align == "right" &&
        `
        align-self: flex-end;
            `}

    ${({ twin }) =>
        twin &&
        `
    margin-bottom: 2em;
    @media (min-width: 800px) {
        width: 45%;
    }
    @media (max-width: 800px){
        max-width: 450px;
    }
`}
`;

export default function Section(props) {
    return (
        <SectionContianer align={props.align} twin={props.twin}>
            {props.title}
            {props.content}
        </SectionContianer>
    );
}

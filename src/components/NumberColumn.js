import React from "react";
import styled from "styled-components";

//Styles
import { shuttleGray, rhino } from "../GlobalStyles";

const Column = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px; 
    right: 0px;
    left: 0px;
    padding-top: 10px;
    width: 40px;
    display: flex;
    flex-direction: column;
    z-index: -1;
`;

const NumberRow = styled.div`
    width: 100vw;
    letter-spacing: 1px;
    color: ${rhino};
    font-family: "Inconsolata", monospace;
    letter-spacing: 1px;

    &:hover:before {
            color: ${shuttleGray};
    }

    &:before {
        width: 40px;
        content: '${props => (props.number)}';
        text-align: center;
        padding-left: 20px;
        font-size: 20px;
    }
`;

export default function NumberColumn() {
    var numbers = [];

    for (var i = 0; i < 100; i++) {
        if (i < 10) {
            numbers.push(`0${i}`);
            continue;
        }
        numbers.push(i);
    }

    return (
        <Column>
            {numbers.map(i => {
                return <NumberRow number={`${i}`}/>;
            })}
        </Column>
    );
}

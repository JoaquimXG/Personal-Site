import React from "react";
import styled from "styled-components";

//Styles
import { shuttleGray, rhino } from "../GlobalStyles";

const rowHeight = 21;
const padding = 10;

const Column = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    padding-top: ${padding}px;
    padding-bottom: ${padding}px;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const NumberRow = styled.div`
    width: 100vw;
    letter-spacing: 1px;
    color: ${rhino};
    font-family: "Inconsolata", monospace;

    &:hover:before {
        color: ${shuttleGray};
    }

    &:before {
        width: 40px;
        content: '${props => props.number}';
        text-align: center;
        padding-left: ${({ number }) => (number < 100 ? 20 : 10)}px;
        font-size: 20px;
        line-height:${rowHeight}px;
    }
`;
export default function NumberColumn(props) {
    var numbers = [];

    var height = props.height - padding;
    var i = 0;

    while (height > padding) {
        if (i < 10) {
            numbers.push(`0${i}`);
            height = height - rowHeight;
            i++;
            continue;
        }
        numbers.push(i);
        height = height - rowHeight;
        i++;
    }

    console.log(`Inside number column ${props.height}`);

    return (
        <Column>
            {numbers.map(i => {
                return <NumberRow key={i} number={`${i}`} />;
            })}
        </Column>
    );
}

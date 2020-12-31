import React, {useEffect, useState} from "react";
import styled from "styled-components";

//Styles
import { shuttleGray, rhino } from "../GlobalStyles";
import {useMousePosition} from "./hooks/useMousePosition";

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
    color: ${({index, number}) => index === number ? shuttleGray : rhino};
    font-family: "Inconsolata", monospace;

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
    const [indexToHighlight, setIndexToHighlight] = useState(0);
    const [numbers, setNumbers] = useState(undefined)

    const position = useMousePosition();

    useEffect(() => {
        setIndexToHighlight(Math.floor((position.y-padding)/rowHeight));
    },[position])


    useEffect(()=>{
        var height = props.height - padding;
        var i = 0;
        var inNumbers = [];

        while (height > padding) {
            if (i < 10) {
                inNumbers.push(i);
                height = height - rowHeight;
                i++;
                continue;
            }
            inNumbers.push(i);
            height = height - rowHeight;
            i++;
        }
        setNumbers(inNumbers)
    }, [props.height])


    return (
        <Column>
            {numbers && numbers.map(i => {
                return <NumberRow key={i} index={indexToHighlight} number={i} />;
            })}
        </Column>
    );
}

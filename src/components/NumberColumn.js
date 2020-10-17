import React from "react";
import styled from 'styled-components';

//Styles 
import {cornflowerBlue} from '../GlobalStyles'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    background: ${cornflowerBlue};
    justify-content: center;
`

const Number = styled.div`
    display: flex;
    align-items: center;
`

export default function NumberColumn(){
    var numbers = [1,2,3,4];


    return (
        <Column >
            {numbers.map(i => {return <Number>{i}</Number>})}
        </Column>
    );
};

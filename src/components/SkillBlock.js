import React from "react";
import styled from "styled-components";

const SkillBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center
    width: 33%;
    margin: 0 0 50px;
`;

const SkillsLogo = styled.img`
    width: 80px;
`

const SkillTitle = styled.h5`
    color: red;
`;

export default function SkillBlock(props) {
    return (
        <SkillBlockContainer>
            <SkillsLogo src={props.src} />
            <SkillTitle>BASH</SkillTitle>
        </SkillBlockContainer>
    );
}

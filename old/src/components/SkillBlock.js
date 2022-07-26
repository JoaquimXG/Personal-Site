import React from "react";
import styled from "styled-components";

const SkillBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 3rem;
`;

const SkillsLogo = styled.img`
    width: calc(32px + 1vw);
    display: flex;
`

const SkillTitle = styled.span`
    text-align: center;
    font-weight: 100; 
    color: ${props => props.color};
    font-size: 19px;
    padding: 1rem 0;
`;

export default function SkillBlock(props) {
    return (
        <SkillBlockContainer>
            <SkillsLogo src={props.src} />
            <SkillTitle color={props.color}>{props.title}</SkillTitle>
        </SkillBlockContainer>
    );
}

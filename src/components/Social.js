import React from "react";
import styled from "styled-components";

const linkedin = require('../image/linkedin.svg');
const github = require('../image/github.svg');

const SocialIcon = styled.img`
    width: calc(0.5em + 6vw);
    max-width: 50px;
    min-width: 35px;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 4rem 1rem 1rem;
`

export default function Social() {
    return (
        <SocialContainer>
            <a href="https:\\www.linkedin.com/in/joaquim-gomez/"><SocialIcon src={String(linkedin)}/></a>
            <a href="https:\\www.github.com/JoaquimXG"><SocialIcon src={String(github)}/></a>
        </SocialContainer>
    )
}

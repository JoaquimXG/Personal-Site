import React from 'react';
import styled from 'styled-components';
import SkillBlock from './SkillBlock';

const bash = require('../image/bashLogo.svg')
const azure = require('../image/azureLogo.svg')
const docker = require('../image/dockerLogo.svg')
const aws = require('../image/awsLogo.svg')
const graphQl = require('../image/graphQlLogo.svg')
const intune = require('../image/intuneLogo.svg')
const react = require('../image/reactLogo.svg')
const python = require('../image/pythonLogo.svg')

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0px 0px;
`

export default function TechnicalSkills(){
    return (
        <SkillsContainer>
            <SkillBlock src={bash} />
            <SkillBlock src={graphQl} />
            <SkillBlock src={docker} />
            <SkillBlock src={intune} />
            <SkillBlock src={react} />
            <SkillBlock src={python} />
            <SkillBlock src={aws} />
            <SkillBlock src={azure} />
        </SkillsContainer>
    )

}

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

const white = '#fff';
const gqlColor = '#D54599';
const dockerColor = '#2496ED';
const azureColor = '#0089D6';
const reactColor = '#61DAFB';
const pythonColor = '#FFD747';
const awsColor = '#F7A80D';

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 4rem 0 0;
`

export default function TechnicalSkills(){
    return (
        <SkillsContainer>
            <SkillBlock src={graphQl} color={gqlColor} title={"GraphQL"} />
            <SkillBlock src={docker} color={dockerColor} title={"Docker"} />
            <SkillBlock src={intune} color={azureColor} title={"Intune"} />
            <SkillBlock src={bash} color={white} title={"Bash"} />
            <SkillBlock src={react} color={reactColor} title={"React"} />
            <SkillBlock src={python} color={pythonColor} title={"Python"} />
            <SkillBlock src={aws} color={awsColor} title={"AWS"} />
            <SkillBlock src={azure} color={azureColor} title={"Azure"} />
        </SkillsContainer>
    )

}

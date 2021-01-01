import React from "react";
import styled from "styled-components";

import {mediumOrchid} from '../GlobalStyles'

const ExperienceSpan = styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: ${({bold}) => bold? 900:500};
`

export default function Experience(props){
    const {startDate, endDate, location, role} = props;

    return (
        <>
            <ExperienceSpan bold>{role}</ExperienceSpan><br/>
            <ExperienceSpan>{location}</ExperienceSpan><br/>
            <ExperienceSpan>{startDate} - {endDate}</ExperienceSpan><br/><br/>
        </>
    )
}

import React from "react";
import styled from "styled-components";

const ExperienceSpan = styled.span`
    line-height: 25px;
`

export default function Experience(props){
    const {startDate, endDate, location, role} = props;

    return (
        <>
            <ExperienceSpan>{startDate} - {endDate}</ExperienceSpan><br/>
            <ExperienceSpan>{location}</ExperienceSpan><br/>
            <ExperienceSpan>{role}</ExperienceSpan><br/><br/>
        </>
    )
}

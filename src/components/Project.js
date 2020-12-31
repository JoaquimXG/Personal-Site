import React from "react";
import styled from "styled-components";
import {olivine} from '../GlobalStyles'

const ProjectSpan = styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
`

const Link = styled.a`
    color: ${olivine};
    text-decoration: none;
`

export default function Project(props){
    const {year, name, description, href} = props;

    return (
        <>
            <ProjectSpan><Link href={href}>{name}</Link> ({year})</ProjectSpan><br/>
            <ProjectSpan>{description}</ProjectSpan><br/><br/>
        </>
    )
}

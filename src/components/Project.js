import React from "react";
import styled from "styled-components";
import {cornflowerBlue} from '../GlobalStyles'

const ProjectSpan = styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
`

const Link = styled.a`
    color: ${cornflowerBlue};
    text-decoration: none;
`

export default function Project(props){
    const {year, name, description, href} = props;

    return (
        <>
            <ProjectSpan><Link href={href}>{name}</Link></ProjectSpan><br/>
            <ProjectSpan>{description}</ProjectSpan><br/>
            <ProjectSpan>{year}</ProjectSpan><br/><br/>
        </>
    )
}

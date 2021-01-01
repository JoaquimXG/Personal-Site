import React from "react";
import styled from "styled-components";
import {cornflowerBlue} from '../GlobalStyles'

const ProjectSpan = styled.span`
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: ${({bold}) => bold ? 900 : 500};
`

const Link = styled.a`
    color: ${cornflowerBlue};
    text-decoration: none;
`

export default function Project(props){
    const {year, name, description, href} = props;

    return (
        <>
            <ProjectSpan bold><Link href={href}>{name}</Link> ({year})</ProjectSpan><br/>
            <ProjectSpan>{description}</ProjectSpan><br/><br/>
        </>
    )
}

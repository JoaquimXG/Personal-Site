import React from "react";
import styled from "styled-components";

import {
    lavendar,
    cornflowerBlue,
    olivine,
    froly,
    corvette
} from "../GlobalStyles";
import Experience from "./Experience";
import Social from "./Social";
import TechnicalSkills from "./TechnicalSkills";
import Section from "./Section";

const MainBody = styled.div`
    width: 100vw;
    text-align: left;
    font-size: calc(8px + 2vmin);
    color: ${lavendar};
    font-family: "Inconsolata", monospace;
    padding 90px 30px 30px 70px;
    margin-left: 0;
`;

const Title = styled.h1`
    color: ${props => props.color};
    font-family: "Roboto", sans-serif;
    font-size: 2em;

    margin: 0 0 30px 0;
`;

const Para = styled.p`
    font-family: "Inconsolata", monospace;
    margin: 30px 0 50px;
`;

const experienceData = [
    {
        start: "2020",
        end: "Present",
        location: "Aberdeen Cyber Security",
        role: "Cyber Security Engineer"
    },
    {
        start: "2020",
        end: "Present",
        location: "Robert Gordon University",
        role: "Computer Science BSc (Hons)"
    },
    {
        start: "2019",
        end: "2020",
        location: "North East Scotland College",
        role: "Cyber Security HNC"
    }
];

export default function Body() {
    return (
        <MainBody>
            <Section
                title={<Title color={olivine}>Hi, I'm Joaquim</Title>}
                content={
                    <Para>
                        I’m a Cyber Security Engineer and developer with a keen
                        interest in cloud technologies. Working with Aberdeen
                        Cyber Security I have gained experience in providing
                        effective, user-focused security solutions in the remote
                        working age. Outside of work, I am studying towards a
                        Computer Science degree at Robert Gordon University,
                        with a focus on designing and implementing enterprise
                        apps at scale.
                    </Para>
                }
            />
            <Section
                content={<TechnicalSkills />}
            />
            <Section
                title={<Title color={cornflowerBlue}>Work + Education</Title>}
                content={experienceData.map(e => {
                    return (
                        <Experience
                            startDate={e.start}
                            endDate={e.end}
                            location={e.location}
                            role={e.role}
                        ></Experience>
                    );
                })}
            />
            <Title color={froly}>Contact</Title>
            <Para>
                If you would like to get in contact, reach me by email at
                info@joaquimgomez.com.
                <br />
                <br />
                Alternatively you can find me on LinkedIn or GitHub below.
                <br />
                <br /> The code for this website is available there too.
            </Para>
            <Social />
        </MainBody>
    );
}

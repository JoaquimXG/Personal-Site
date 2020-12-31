import React from "react";
import styled from "styled-components";

import {
    lavendar,
    cornflowerBlue,
    olivine,
    froly,
    mediumOrchid,
    corvette
} from "../GlobalStyles";
import Experience from "./Experience";
import Social from "./Social";
import TechnicalSkills from "./TechnicalSkills";
import Section from "./Section";
import Project from "./Project";
import TwinSection from "./TwinSection";

const MainBody = styled.div`
    width: 100vw;
    max-width: 1100px;
    text-align: left;
    color: ${lavendar};
    font-family: "Inconsolata", monospace;
    padding 5rem 2.5rem 2rem;
    margin: auto;
`;

const Title = styled.h1`
    color: ${props => props.color};
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    margin: 0 0 0.8rem 0;
`;

const Para = styled.p`
    font-size: 1.2rem;
    margin: 0.8rem 0 1.5rem;
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

const projectData = [
    {
        name: "POD Colors",
        description:
            "A personality test website for Robert Gordon University HR department",
        year: "2020",
        href: "http://google.com"
    },
    {
        name: "POD Colors",
        description:
            "A personality test website for Robert Gordon University HR department",
        year: "2020",
        href: "http://google.com"
    },
    {
        name: "POD Colors",
        description:
            "A personality test website for Robert Gordon University HR department",
        year: "2020",
        href: "http://google.com"
    }
];

export default function Body() {
    return (
        <MainBody>
            <Section
                title={<Title color={olivine}>Hi, I'm Joaquim</Title>}
                content={
                    <Para>
                        I’m a Cyber Security Analyst and developer with a keen
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
            <Section content={<TechnicalSkills />} />
            <TwinSection>
                <Section
                    twin={true}
                    title={
                        <Title color={cornflowerBlue}>Work + Education</Title>
                    }
                    content={experienceData.map(experience => {
                        return (
                            <Experience
                                startDate={experience.start}
                                endDate={experience.end}
                                location={experience.location}
                                role={experience.role}
                            ></Experience>
                        );
                    })}
                />
                <Section
                    twin={true}
                    align="right"
                    title={<Title color={mediumOrchid}>Projects</Title>}
                    content={projectData.map(project => {
                        return (
                            <Project
                                name={project.name}
                                description={project.description}
                                year={project.year}
                                href={project.href}
                            ></Project>
                        );
                    })}
                />
            </TwinSection>
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

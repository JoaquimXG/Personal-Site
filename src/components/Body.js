import React, { useState, useRef, useEffect } from "react";

//Global Styles
import {
    cornflowerBlue,
    olivine,
    froly,
    mediumOrchid,
    lavendar
} from "../GlobalStyles";

//Styled components
import MainBody from "./styled/MainBody";
import Title from "./styled/Title";
import Para from "./styled/Para";
import TwinSection from "./TwinSection";
import Project from "./Project";
import Experience from "./Experience";
import Social from "./Social";
import TechnicalSkills from "./TechnicalSkills";
import Section from "./Section";

//Data
import projectData from "../data/project";
import experienceData from "../data/experience";

export default function Body(props) {
    const myRef = useRef(undefined)

    useEffect(() => {
        function handleResize() {
            props.getMainBodyHeight(myRef.current.getBoundingClientRect().height)
        }

        window.addEventListener("resize", handleResize)

        handleResize();
        return () => window.removeEventListener("resize", handleResize)
    }, []);

    return (
        <MainBody ref={myRef}>
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
            <Section id="hello" content={<TechnicalSkills />} />
            <TwinSection>
                <Section
                    key="left"
                    twin={true}
                    title={<Title color={mediumOrchid}>Projects</Title>}
                    content={projectData.map((project, i) => {
                        return (
                            <Project
                                key={i}
                                name={project.name}
                                description={project.description}
                                year={project.year}
                                href={project.href}
                            ></Project>
                        );
                    })}
                />
                <Section
                    key="right"
                    twin={true}
                    align="right"
                    title={
                        <Title color={cornflowerBlue}>Work + Education</Title>
                    }
                    content={experienceData.map((experience, i) => {
                        return (
                            <Experience
                                key={i}
                                startDate={experience.start}
                                endDate={experience.end}
                                location={experience.location}
                                role={experience.role}
                            ></Experience>
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

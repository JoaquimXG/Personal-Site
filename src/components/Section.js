import React from "react";
import styled from "styled-components";

import {
    lavendar,
    cornflowerBlue,
    olivine,
    froly,
    corvette,
} from "../GlobalStyles";

export default function Section(props) {
    return (
        <>
            {props.title}
            {props.content}
        </>
    );
}

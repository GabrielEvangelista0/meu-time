import React from "react";
import styled from "styled-components";

interface Props{
    children: React.ReactNode,
    width: string
}

export default function Button({children, width}: Props){
    return(
        <StyledButton width={width}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled('button')<{width: string}>`

    background-color: blue;
    padding: 0.5rem;
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 10px;
    width: ${p => p.width};
    transition: 300ms;

    &:hover{
        background-color: green;
    }

`
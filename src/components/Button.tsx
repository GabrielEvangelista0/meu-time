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

    background-color: transparent;
    border: 2px solid var(--primaryColor);
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: var(--font);
    border-radius: 10px;
    width: ${p => p.width};
    transition: 300ms;

    &:hover{
        background-color: var(--primaryColor);
        color: var(--background);
    }

`
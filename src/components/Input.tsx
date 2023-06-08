import React, { ChangeEvent } from "react"
import styled from "styled-components"

interface Props {
    placeholder: string,
    width: string,
    onChange: React.EventHandler<ChangeEvent>
}

export default function Input({ placeholder, width, onChange }: Props) {
    return (
        <StyledInput
            width={width}
            type="text"
            required
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

Input.defaultProps = {
    placeholder: 'Escreva',
    width: '100%'
}

const StyledInput = styled('input') <{ width: string }>`

    width: ${p => p.width};
    color: var(--font);
    padding: 1rem;
    border: none;
    border-bottom: 2px solid var(--font);
    background-color: transparent;
    outline: none;
    box-shadow: none;
    font-size: 1.2rem;
    
    &::placeholder{
        color: var(--font);
    }

    &:focus{
        border-bottom: 2px solid var(--primaryColor);
    }

`
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
    padding: 1rem;
    border: 2px solid #262639d2;
    outline: none;
    box-shadow: none;
    border-radius: 5px;
    font-size: 1rem;

    &:focus{
        border: 3px solid navy;
    }

`
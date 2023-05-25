import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Input from "../components/Input"
import Table from "../components/Table/Table"

export default function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        const key = sessionStorage.getItem('key');
        if (key == undefined) {
            navigate('/login')
        }

    }, [])
    const [inputValue, setInputValue] = useState<string>('')
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }
    return (
        <>
            <Header>
                <h1>
                    Meu Time
                </h1>
                <form>
                    <Input
                        placeholder="ola"
                        onChange={handleChange}
                        width="50%"
                    />
                </form>
            </Header>
            <Table/>
        </>
    )
}

const Header = styled.header`
    margin-bottom: 3rem;
`
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { ChangeEvent, useState } from 'react';
import { data } from '../services/getData';

export default function Login() {
    const [inputValue, setInputValue] = useState<string>('')
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }
    return (
        <StyledLogin
            onSubmit={(e) => {
                e.preventDefault()
                console.log('Ola mundo');
                data.getCountries(inputValue)
            }}
        >
            <h1>Entrar</h1>
            <form>
                <Input
                    placeholder='Escreva Sua chave'
                    onChange={handleChange}
                />
                <Button width='50%'>Entrar</Button>
                <a href="https://dashboard.api-football.com/" target="_blank">Cadastrar chave da api</a>
            </form>
        </StyledLogin>
    )
}

const StyledLogin = styled.main`
    min-height: 100vh;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        background-color: red;
        border-radius:20px;
        width: 50%;
        height: 400px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        a{
            color: white;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`
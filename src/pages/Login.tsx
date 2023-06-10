import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { ChangeEvent, useState } from 'react';
import { getCountries } from '../services/getData';

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
                getCountries(inputValue)
            }}
        >
            <h1>Entrar</h1>
            <form>
                <Input
                    width='60%'
                    placeholder='Escreva Sua chave'
                    onChange={handleChange}
                />
                <Button width='100px'>Entrar</Button>
                <a href="https://dashboard.api-football.com/" target="_blank" rel="noreferrer">Buscar chave da api</a>
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

    h1{
       color: var(--background);
    }

    form{
        border-radius:20px;
        background-color: rgba(255, 255, 255, 0.7);
        border: 2px solid white;
        box-shadow: 3px 2px 15px rgba(0, 0, 0, 0.3);
        width: 50%;
        height: 400px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        a{
            color: var(--primaryColor);
            font-weight: bold;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`
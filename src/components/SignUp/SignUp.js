import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function SignUp() {

    const navigate = useNavigate();
    const [user, setUser] = useState({});

    function handleForm(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function sendForm(e) {

        e.preventDefault();
        
        const {name, email, password, confirmPassword} = user
        if(!name || !email || !password){
            return alert('Todos os campos são obrigatórios!')
        }
        if(password !== confirmPassword){
            return alert('As senhas devem ser iguais!')
        }

        try {
            await axios.post('http://localhost:5000/cadastro', {name, email, password});
            navigate('/login');
        } catch (error) {
            alert(error.response.data)
        }
    }

    return(
        <Container>
            <Title>
                <h1>Driven Mugs</h1>
            </Title>
            <Corpo onSubmit={sendForm}>
                <input 
                placeholder="Nome"
                type="text"
                name="name"
                onChange={handleForm}
                required></input>
                <input 
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={handleForm}
                required></input><input 
                placeholder="Senha"
                type="password"
                name="password"
                onChange={handleForm}
                required></input>
                <input 
                placeholder="Confirmar senha"
                type="password"
                name="confirmPassword"
                onChange={handleForm}
                required></input>
                <Register type="submit" style={{textDecoration: 'none'}}>Cadastrar</Register>
            </Corpo>
            <Log to="/login" style={{textDecoration: 'none'}}>Já tem conta? Entre agora!</Log>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    font-family: 'Comfortaa';
    font-weight: 400;
    font-size: 20px;
    color: #79a1b0;
`
const Corpo = styled.form`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        width: 326px;
        height: 58px; 
        background-color: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 10px;
        border: none;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #000000;
        box-sizing: border-box;
        padding: 15px;
    ::placeholder{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }
}
`
const Register = styled.button`
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a4d0bb;
    border-radius: 5px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    margin-bottom: 25px;
`
const Log = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #79a1b0;
`
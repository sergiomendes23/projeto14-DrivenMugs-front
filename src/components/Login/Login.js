import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../Context/UserContext';


export default function Login() {

    let navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { setToken } = useContext(UserContext);
    const { setUser } = useContext(UserContext);

    async function sendForm(e) {
        
        e.preventDefault();
        
        const body = {
            email,
            password
        }

        if (!email || !password){
            alert('Email ou Senha incorretos! Tente novamente.');
            return
        }

        try{
            const login = await axios.post('http://localhost:5000/login', body);
            setToken(login.data.token);
            setUser(login.data.nome);
            navigate("/");
        }catch(error){
            alert(error.response.data);
        }
        
    }



    return(
        <Container>
            <Title>
                <h1>Driven Mugs</h1>
            </Title>
            <Corpo onSubmit={sendForm}>
                <input 
                placeholder="E-mail"
                type="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                required></input>
                <input 
                placeholder="Senha"
                type="password"
                name="senha"
                onChange={e => setPassword(e.target.value)}
                required></input>
                <Enter style={{textDecoration: 'none'}}>Entrar</Enter>
            </Corpo>
            <Register to="/signup" style={{textDecoration: 'none'}}>Primeira vez? Cadastre-se!</Register>
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
    line-height: 50px;
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
const Enter = styled.button`
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
const Register = styled(Link)`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    color: #79a1b0;
`
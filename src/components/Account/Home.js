import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../Context/UserContext';
import axios from 'axios';

export default function Home() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const req = axios.get('http://localhost:5000/canecas');
        req.then(res => {
            setProducts(res.data);
          });
    }, []);
    console.log(products);

    //use navigate to go to product page. must pass ALL product info on params
    //navigate('/product', {productId: id});

    function goToProductPage(id){
        console.log(id);
        console.log(products[id]);
        navigate(`/product/${id}`);
    }

    return(
        <Container>
            <Header>
                <User>
                    <ion-icon name="person-outline"></ion-icon>
                    <h1>Olá, {user}</h1>
                </User>
                <Logo to="/" style={{textDecoration: 'none'}}>Driven Mugs</Logo>
                <ion-icon name="cart-outline"></ion-icon>
            </Header>
            <Reference>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <h1>Lista de produtos</h1>
            </Reference>
            <Products>
                {products.map((product) => (
                    <Product key={product.id}>
                        <img src={product.img} alt={product.product}></img>
                        <p>{product.product}</p>
                        <h1>R$ {product.preco}</h1>
                        <Buy onClick={() => goToProductPage(product.id)}>Comprar</Buy>
                    </Product>
                ))}
            </Products>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #eaeaea;
`
const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #79a1b0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    ion-icon{
        width: 24px;
        height: 24px;
        color: #eaeaea;
        cursor: pointer;
    }
`
const User = styled.div`
    display: flex;
    align-items: center;
    color: #eaeaea;
    h1{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 18px;
        color: #eaeaea;
        margin-left: 10px;
    }
`
const Logo = styled(Link)`
    font-family: 'Comfortaa';
    font-weight: 400;
    font-size: 20px;
    color: #eaeaea;
`
const Reference = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 20px;
    h1{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 400;
        font-size: 20px;
        color: #79a1b0;
    }
    ion-icon{
        color: #79a1b0;
    }
`
const Products = styled.div`
    width: 100%;
    height: 500px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`
const Product = styled.div`
    width: 170px;
    height: 250px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border-color: #a4d0bb;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    margin-bottom: 10px;
    img{
        width: 150px;
        height: 137px;
    }
    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 14px;
        color: #79a1b0;
        line-height: 0;
    }
    h1{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;
        color: #a4d0bb;
        line-height: 0;
    }
`
/*const Image = styled.div`
    width: 150px;
    height: 150px;
    background-color: #eaeaea;
    border-radius: 5px;
`*/
const Buy = styled.button`
    width: 150px;
    height: 30px;
    border-radius: 50px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 14px;
    background-color: #a4d0bb;
    color: #ffffff;
    border: none;
    margin-top: 10px;
`
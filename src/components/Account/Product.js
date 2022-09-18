import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../Context/UserContext';


export default function ProductPage(props) {

    const { user } = useContext(UserContext);
    //const { route } = props;
    //const { productId } = route.params;

    const product = {
      id: 0,
      product: "Caneca legal",
      img: "https://cdn.awsli.com.br/600x450/608/608801/produto/25913910/caneca-github-956861b4.jpg",
      description: "outra descricao igualmente complexa",
      preco: "5,00"
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
                <h1>Produtos / {product.product}</h1>
            </Reference>
            <Body>
              <Product>
                <div>
                  <img src={product.img}/>
                </div>
                <ProductInfo>
                  <h1>{product.product}</h1>
                  <p>{product.description}</p>
                  <h1>R$ {product.preco}</h1>
                  <Buy>Comprar</Buy>
                </ProductInfo>
              </Product>
            </Body>
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
const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Product = styled.div`
    width: 700px;
    height: 550px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border-color: #a4d0bb;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 10px;
    margin-bottom: 10px;
    img{
        width: 360px;
        height: 360px;
    }
    div{
      width: 50%;
      display: flex;
      justify-content: center;
    }
    p{
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 16px;
      color: #79a1b0;
      line-height: 0;
    }
    h1{
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 22px;
      color: #a4d0bb;
      line-height: 0;
    }
    button{
    margin-top: 20px;

    }
`
const ProductInfo = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Buy = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 50px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 22px;
    background-color: #a4d0bb;
    color: #ffffff;
    border: none;
    margin-top: 10px;
`
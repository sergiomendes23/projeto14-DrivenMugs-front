import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AddCart, getHomePage } from "../Context/axiosService";
import Header from "../Header/Header";

export default function Home() {
	const navigate = useNavigate();
	const homePage = getHomePage;

	return (
		<Container>
			<Header />
			<Reference>
				<ion-icon name="chevron-forward-outline"></ion-icon>
				<h1>Lista de produtos</h1>
			</Reference>
			<Products>
				{homePage.map((product) => {
					return (
						<>
							<Product onClick={navigate(`/caneca/${product.id}`)}>
								<Image>
									<img src={product.img} alt="Product" />
								</Image>
								<p>{product.product}</p>
								<h1>R$ {product.preco}</h1>
								<Buy onClick={() => AddCart(product._id)}>Comprar</Buy>
							</Product>
						</>
					);
				})}

				{/*

				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<h1>R$ 39,90</h1>
					<Buy>Comprar</Buy>
				</Product>
				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<h1>R$ 39,90</h1>
					<Buy>Comprar</Buy>
				</Product>
				
				*/}
			</Products>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #eaeaea;
`;

const Reference = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding-left: 20px;
	h1 {
		font-family: "Raleway";
		font-weight: 400;
		font-size: 20px;
		line-height: 1.5;
		font-weight: 400;
		font-size: 20px;
		color: #79a1b0;
	}
	ion-icon {
		color: #79a1b0;
	}
`;
const Products = styled.div`
	width: 100%;
	height: 500px;
	padding-left: 20px;
	padding-right: 20px;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
`;
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
	p {
		font-family: "Raleway";
		font-weight: 400;
		font-size: 14px;
		color: #79a1b0;
		line-height: 0;
	}
	h1 {
		font-family: "Raleway";
		font-weight: 400;
		font-size: 20px;
		color: #a4d0bb;
		line-height: 0;
	}
`;
const Image = styled.div`
	width: 150px;
	height: 150px;
	background-color: #eaeaea;
	border-radius: 5px;
`;

const Buy = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 50px;
	font-family: "Raleway";
	font-weight: 400;
	font-size: 14px;
	background-color: #a4d0bb;
	color: #ffffff;
	border: none;
	margin-top: 10px;
`;

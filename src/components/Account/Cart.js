import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { getCartData } from "../Context/axiosService";
import UserContext from "../Context/UserContext";

export default function Cart() {
	const { user } = useContext(UserContext);
	// eslint-disable-next-line no-unused-vars
	const data = getCartData;

	return (
		<Container>
			<Header>
				<User>
					<ion-icon name="person-outline"></ion-icon>
					{user !== "" ? (
						<h1>Olá, {user}</h1>
					) : (
						<>
							<h1>
								{" "}
								Faça
								<Link to="/login"> Login </Link>
								ou
								<Link to="/singup"> Cadastre-se </Link>
							</h1>
						</>
					)}
				</User>
				<Logo to="/" style={{ textDecoration: "none" }}>
					Driven Mugs
				</Logo>
				<ion-icon name="cart-outline"></ion-icon>
			</Header>

			<Reference>
				<ion-icon name="chevron-forward-outline"></ion-icon>
				<h1>Lista de produtos</h1>
			</Reference>

			<Products>
				{/* {data.map((prod) => {
					return (
						<>
							<li>
								<Product>
									<Image>
										<img src={prod.img} alt="Product" />
									</Image>
									<div>
										{prod.product}
										{prod.description}
									</div>
									{prod.preco}
								</Product>
							</li>
						</>
					);
				})} */}

				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<div>
						<h1>R$ 39,90</h1>
						<Remover>Remover</Remover>
					</div>
				</Product>
				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<div>
						<h1>R$ 39,90</h1>
						<Remover>Remover</Remover>
					</div>
				</Product>
				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<div>
						<h1>R$ 39,90</h1>
						<Remover>Remover</Remover>
					</div>
				</Product>

				<Buy onClick={() => Navigate("/checkout")}>Fechar Pedido</Buy>
			</Products>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #eaeaea;
`;
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
	ion-icon {
		width: 24px;
		height: 24px;
		color: #eaeaea;
		cursor: pointer;
	}
`;
const User = styled.div`
	display: flex;
	align-items: center;
	color: #eaeaea;
	h1 {
		font-family: "Raleway";
		font-weight: 400;
		font-size: 18px;
		color: #eaeaea;
		margin-left: 10px;
	}
`;
const Logo = styled(Link)`
	font-family: "Comfortaa";
	font-weight: 400;
	font-size: 20px;
	color: #eaeaea;
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
	height: 100vh;
	padding-left: 20px;
	padding-right: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow-x: scroll;
`;
const Product = styled.div`
	width: 90vh;
	height: 250px;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 5px;
	border-color: #a4d0bb;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	div {
		align-items: center;
		justify-content: center;
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
const Remover = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 50px;
	font-family: "Raleway";
	font-weight: 400;
	font-size: 14px;
	background-color: red;
	color: #ffffff;
	border: none;
	margin-top: 10px;
`;

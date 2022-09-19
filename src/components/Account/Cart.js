import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { getCartData } from "../Context/axiosService";
import Header from "../Header/Header";

export default function Cart() {
	const data = getCartData;

	return (
		<Container>
			<Header />
			<Reference>
				<ion-icon name="chevron-forward-outline"></ion-icon>
				<h1>Lista de produtos</h1>
			</Reference>

			<Products>
				{data.map((prod) => {
					return (
						<>
							<li>
								<Product>
									<Image>
										<img src={prod.img} alt="Product" />
									</Image>
									<div>
										<p>{prod.product}</p>
										{prod.description}
									</div>
									<Price>
										<h1>R$ {prod.preco}</h1>
										<Remover>
											<ion-icon name="trash-outline"></ion-icon>
										</Remover>
									</Price>
								</Product>
							</li>
						</>
					);
				})}

				{/* 				
					//REVIEW - Se sobrar um tempo refatorar isso pra usar o cart sem token e pedir login na hora do checkout

				{data.length>0 ? (
					{ data.map( (prod) => {
						return (
							<>
								<li>
									<Product>
										<Image>
											<img src={prod.img} alt="Product" />
										</Image>
										<div>
											<p>
											{prod.product}
											</p>
											{prod.description}
										</div>
										<Price>
											<h1>R$ {prod.preco}</h1>
											<Remover>
												<ion-icon name="trash-outline"></ion-icon>
											</Remover>
										</Price>							
									</Product>
								</li>
							</>
						);
					})
					}
				) : (
					<>
							<h2>
								Parece que seu carrinho esta vazio
							</h2>
							<Link to="/">
								Compra ai Krai
							</Link>
						</>
					)
				} */}

				{/* <Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<Price>
						<h1>R$ 39,90</h1>
						<Remover>
							<ion-icon name="trash-outline"></ion-icon>
						</Remover>
					</Price>
				</Product>
				<Product>
					<Image></Image>
					<p>Caneca git commands</p>
					<Price>
						<h1>R$ 39,90</h1>
						<Remover>
							<ion-icon name="trash-outline"></ion-icon>
						</Remover>
					</Price>
				</Product> */}

				<Buy onClick={() => Navigate("/checkout")}>Fechar Pedido</Buy>
			</Products>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
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
	height: 100%;
	padding-left: 20px;
	padding-right: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;
const Product = styled.div`
	width: 100%;
	height: 170px;
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
	}
	h1 {
		font-family: "Raleway";
		font-weight: 400;
		font-size: 20px;
		color: #a4d0bb;
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
const Price = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Remover = styled.button`
	height: 35px;
	border-radius: 50px;
	font-family: "Raleway";
	font-weight: 400;
	font-size: 14px;
	background-color: red;
	color: #ffffff;
	border: none;
	margin-top: 10px;
	ion-icon {
		width: 24px;
		height: 24px;
	}
`;

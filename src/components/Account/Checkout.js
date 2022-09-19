import { useContext } from "react";
import styled from "styled-components";
import { CartCheckout } from "../Context/axiosService";
import UserContext from "../Context/UserContext";
import Header from "../Header/Header";

export default function Checkout() {
	const { token } = useContext(UserContext);

	return (
		<>
			<Container>
				<Header />
				<Buy
					onClick={() => {
						alert(CartCheckout(token));
					}}>
					Confirmar Pedido
				</Buy>
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #eaeaea;
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

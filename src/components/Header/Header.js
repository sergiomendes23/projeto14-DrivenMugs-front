import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Header(){

    const { user } = useContext(UserContext);

    return(
			<Container>
				<User>
					<ion-icon name="person-outline"></ion-icon>
					{user !== "" ? (
						<h1>Olá, {user}</h1>
					) : (
						<>
							<h1>
								{" "}
								Faça
								<LogLink to="/login" style={{ textDecoration: "none" }}> Login </LogLink>
								ou
								<LogLink to="/signup" style={{ textDecoration: "none" }}> Cadastre-se </LogLink>
							</h1>
						</>
					)}
				</User>
				<Logo to="/" style={{ textDecoration: "none" }}>
					Driven Mugs
				</Logo>
				<ion-icon name="cart-outline"></ion-icon>
			</Container>
    )
}

const Container = styled.div`
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
const LogLink = styled(Link)`
	font-family: "Raleway";
	font-weight: 700;
	font-size: 18px;
	color: #eaeaea;
`;
const Logo = styled(Link)`
	font-family: "Comfortaa";
	font-weight: 400;
	font-size: 20px;
	color: #eaeaea;
`;
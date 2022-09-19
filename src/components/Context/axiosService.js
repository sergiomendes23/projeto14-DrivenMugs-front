import axios from "axios";

const URI = process.env.DB_URI;

async function getHomePage() {
	try {
		const homePage = await axios.get(`${URI}/`);

		return homePage;
	} catch (error) {
		console.error("Error: " + error.message);
	}
}

async function getCartData(res) {
	try {
		const cart = await axios.get(`${URI}/cart`).then(() => {
			return cart;
		});
	} catch (error) {
		console.error("Error: " + error.message);
	}
}
async function AddCart(id) {
	try {
		await axios
			.post(`${URI}/cart`, id)
			.then(() => console.log("Deu bom no cart"));
	} catch (error) {
		console.error("Error: " + error.message);
	}
}
async function CartCheckout(token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		await axios
			.post(`${URI}/checkout`, config)
			.then(() => console.log("Deu bom no checkout"));

		return "Pedido realizado com sucesso";
	} catch (error) {
		console.error("Error: " + error.message);
		return "Deu ruim parça";
	}
}

export { getHomePage, getCartData, AddCart, CartCheckout };

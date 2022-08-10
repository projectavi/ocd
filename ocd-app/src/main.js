import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContractFactory, ethers } from "./ethers-5.6.esm.min.js";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const signinButton = document.getElementById("signinButton")
signinButton.onclick = signin()

async function signin() {
	if (typeof window.ethereum !== "undefined") {
		try {
			await window.ethereum.request({ method: "eth_requestAccounts" })
		}
		catch (error) {
			console.log(error)
		}
		signinButton.innerHTML = "Connected!"
		const accounts = await ethereum.request({ method: "eth_accounts" })
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		const signer = provider.getSigner()
		console.log(ethers)
		console.log("hi")
		//console.log(error)
	}
	else {
		signinButton.innerHTML = "Please install metamask connected!"
	}
}




//const url = "https://rpc.ankr.com/eth";
//const provider = new ethers.providers.JsonRpcProvider(url)
//const signer = provider.getSigner()
//console.log(signer);


export default app;
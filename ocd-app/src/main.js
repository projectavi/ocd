import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

const Web3 = require('web3');
const url = "https://rpc.ankr.com/eth";

provider.eth.getBlockNumber().then((result) => {
	console.log("Current block number: " + result);
});

export default app;
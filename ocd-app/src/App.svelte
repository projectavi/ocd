<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Launch from "./Launch.svelte";
	import Verify from "./Verify.svelte";
</script>

<Router>
	<header>
		<!-- <h1>
			On-Chain Degrees
		</h1> -->
	</header>

	<main>

		<Verify />

		<Route path="launch">
			<Launch />
		</Route>

		<Route path="verify">
			<Verify />
		</Route>

		<Route path="wallet">
			<Wallet />
		</Route>
	</main>
</Router>
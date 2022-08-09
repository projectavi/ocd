<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Launch from "./Launch.svelte";
</script>

<Router>
	<header>

	</header>

	<main>

		<Launch />

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
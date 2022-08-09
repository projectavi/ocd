<script>
	import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
	<header>
		<h1>
			On-Chain Degrees
		</h1>
	</header>

	<main>
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
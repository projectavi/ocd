<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { Button } from "sveltestrap";
</script>
    
    <div id="signinButton">
        <Button size="lg">Sign In</Button>
    </div>

    <div id="center">
        <div>
        </div>

        <div>
            <h1>
                Ethos Wallet
            </h1>
            <h3> On-Chain Certifications in your pocket </h3>
        </div>
    </div>

<style>

    #signinButton {
        position:absolute;
        top:2.5%;
        right:2.5%;
    }

    #center {
        /* Center Div */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>
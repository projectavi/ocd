<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
</script>
    
    <div id="signinButton">
        <Button size="lg">Sign In</Button>
    </div>

    <div id="center" class="row-align">
        <div>
            <img id="logo" src="https://www.transparentpng.com/thumb/wallet/77VFRH-white-wallet-photos.png" alt="white wallet photos @transparentpng.com">
        </div>

        <div>
            <h1>
                Ethos Wallet
            </h1>
            <h3> On-Chain Certifications in your pocket </h3>
        </div>
    </div>

    <div id="register" class="row-align">
        <h2 id="margin-right"> I am a </h2>
        <Dropdown>
            <DropdownToggle caret> Choose an option </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header> I am a... </DropdownItem>
                <DropdownItem> an organisation </DropdownItem>
                <DropdownItem> an individual </DropdownItem>
            </DropdownMenu>
        </Dropdown>
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

    #register {
        /* Center at the bottom */
        position: absolute;
        top: 85%;
        left: 40%;
        right: 40%;
    }

    #margin-right
    {
        margin-right: 20px;
    }

    #logo {
        scale: 0.5;
        margin-right: -50px;
    }

    .row-align {
        /* Layout horizontally */
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
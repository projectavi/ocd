<script>
    import { Router, Route, Link } from "svelte-navigator";
    import { Modals, closeModal, openModal, modals } from 'svelte-modals';
    import { fade } from 'svelte/transition';
    import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
    import Popup from "./Popup.svelte";

    function handleOpen() {
		openModal(Popup, { 
			title: `Sign In`, 
			message: "This is an alert",
		})
	}
</script>
    
    <div id="signinButton">
        <Button size="lg" >Deploy</Button>
        <Button size="lg" on:click={handleOpen}>Sign In</Button>
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

    <Modals>
        <div
          slot="backdrop"
          class="backdrop"
              transition:fade
          on:click={closeModal}
        />
      </Modals>

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

    .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
</style>
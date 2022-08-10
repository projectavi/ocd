<script>
    import { Router, Route, Link } from "svelte-navigator";
    
</script>

<div id="top">
    <h1 style= 'font-size: 80px'>Who Are You?</h1>
</div>

<div id="static-left">
    <h5>
        <a href="#scan" class="nav">
            <strong style='font-size:40px'>1</strong> Scan
        </a>
    </h5>
    <h5>
        <a href="#summary" class="nav">
            <strong style='font-size:40px'>2</strong> Summary
        </a>
    </h5>
    <h5>
        <a href="#linkwallet" class="nav">
            <strong style='font-size:40px'>3</strong> Link Wallet
        </a>
    </h5>
    <h5>
        <a href="#launching" class="nav">
            <strong style='font-size:40px'>4</strong> Launching..
        </a>
    </h5>
</div>


<div id="scroll-right">
    <section id="scan">
        <h1 style="font-size:70px">
            Scan
        </h1>
    </section>
    <section id="summary">
        <h1 style="font-size:70px">
            Summary
        </h1>
    </section>
    <section id="linkwallet">
        <h1 style="font-size:70px">
            Link Wallet
        </h1>
        <p></p>
    </section>
    <section id="launching">
        <h1 style="font-size:70px">
            Launching..
        </h1>
        <p></p>
    </section>
</div>


<style>
    html{
        scroll-behavior: smooth;
    }
    #top {
        top: 10%;
        margin-left: 7%;
        height:60%;
    }
    #scroll-right {
        position: relative;
        overflow: auto;
        margin-top:2%;
        margin-left:30%;
    }

    #static-left{
        position: sticky;
        float: left;
        top: 40%;
        margin-left:7%;
        top: 2rem;
    }

    .nav{
        text-decoration: none;
        color:#FF5D88;
    }
</style>
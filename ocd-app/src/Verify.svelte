<script>
    import { Router, Route, Link } from "svelte-navigator";

    function clickselect() {
        
}
</script>

<div id="top">
    <h1 style= 'font-size: 80px'>Who Are You?</h1>
</div>

<div id="static-left">
    <h5 style="text-decoration: none;">
        <a href="#scan">
            <strong style='font-size:60px'>1</strong> Scan
        </a>
    </h5>
    <h5>
        <a href="#summary">
            <strong style='font-size:60px'>2</strong> Summary
        </a>
    </h5>
    <h5>
        <a href="#linkwallet">
            <strong style='font-size:60px'>3</strong> Link Wallet
        </a>
    </h5>
    <h5>
        <a href="#launching">
            <strong style='font-size:60px'>3</strong> Launching..
        </a>
    </h5>
</div>


<div id="scroll-right">
    <section id="scan">
        <h1 style="font-size:100px">
            Scan
        </h1>
    </section>
    <section id="summary">
        <h1 style="font-size:100px">
            Summary
        </h1>
    </section>
    <section id="linkwallet">
        <h1 style="font-size:100px">
            Link Wallet
        </h1>
        <p></p>
    </section>
    <section id="launching">
        <h1 style="font-size:100px">
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
        top: 35%;
        margin-left:7%;
        top: 2rem;
    }
</style>
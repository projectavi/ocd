<script>
    import { Router, Route, Link } from "svelte-navigator";
</script>

<div id="top">
    <h1 style= 'font-size: 80px'>Who Are You?</h1>
</div>

<div id="static-left">
    <h5>
        <strong style='font-size:60px'>1</strong> Scan
    </h5>
    <h5>
        <strong style='font-size:60px'>2</strong> Summary
    </h5>
    <h5>
        <strong style='font-size:60px'>3</strong> Link Wallet
    </h5>
</div>


<div id="scroll-right">
    <p>
        heyo
    </p>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
    <br>
    <h1 style="font-size:160px">
        SLDKFJLKS
    </h1>
</div>




<style>
    #top {
        position: sticky;
        top: 10%;
        margin-left: 7%;
        background-color: blue;
        /* transform: translate(-50%, -50%); */
    }
    #scroll-right {
        position: relative;
        background-color: purple;
        /* overflow: auto; */
        margin-top:15%;
        margin-left:30%;
        width:65%;
    }

    #static-left{
        position: sticky;
        background-color: orange;
        float: left;
        top: 35%;
        margin-left:7%;
    }

</style>
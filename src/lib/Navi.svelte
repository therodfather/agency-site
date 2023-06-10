<!--src/lib/Navi.svelte-->
<script>
    import PocketBase from 'pocketbase';
    import { isLoggedIn } from './ligma.js';
    import { deleteCookie } from "./cookie.ts";

    function logOutHandler() {
        event.preventDefault();
        const pb = new PocketBase('https://anij.bytecats.codes/pb');

        console.log('Logging out...');
            console.log('Logging out...');

            pb.authStore.clear();
            isLoggedIn.set(false);
            deleteCookie('authToken');
    }
</script>

<nav>
    <ul class="nav-bar">
        <li><a href="/intro">Home</a></li>
        <li><a href="/software">Software</a></li>
        <li><a href="/devops">DevOps</a></li>
        <li><a href="/cloud">Cloud</a></li> <li><a href="/project">Project</a></li>
        {#if !isLoggedIn}
            <li><a on:click={logOutHandler} href="/login">Login</a></li>
        {/if}
        {#if isLoggedIn}
            <li><a on:click={() => logOutHandler(event)} href="/login">Log Out</a></li>
        {/if}
    </ul>

</nav>

<style>
    .nav-bar {
        position: fixed;      
        top: 0;
        left: 0;
        min-width: 90%;
        border-radius: 1.5rem;
        justify-content: center; 
        display: flex;
        list-style: none;
        padding: 1rem;
        margin: 4rem;
        font-size: x-large;
    }

    .nav-bar li {
        margin: 0 0.5em;
    }

    ul {
        list-style-type: none;
        padding: 0;
        overflow: hidden;
        background-color: rgba(51, 51, 51, 0.8);
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: #111;
    }
</style>

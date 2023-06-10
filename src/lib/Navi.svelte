<!-- src/lib/Navi.svelte -->
<script>
    import { isLoggedIn } from './store.js';
    import { logOutHandler } from './auth';
</script>

<nav>
    <ul class="nav-bar">
    <li><a href="/intro">Home</a></li>
    <li><a href="/software">Software</a></li>
    <li><a href="/devops">DevOps</a></li>
    <li><a href="/cloud">Cloud</a></li>
    <li><a href="/project">Project</a></li>
    <li><a href="/about">About</a></li>
    {#if !isLoggedIn}
        <li><a href="/login">Login</a></li>
    {:else}
        <li><a on:click={logOutHandler} href="/login">Log Out</a></li>
    {/if}
    </ul>
</nav>

<style>
    .nav-bar {
        position: fixed;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        background-color: rgba(51, 51, 51, 0.6); 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        z-index: 1;
        border-radius: 10px; 
        backdrop-filter: blur(5px);
    }

    .nav-bar ul {
        list-style: none; /* remove the bullets */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-bar li {
        margin: 0 1rem;
        list-style: none; /* remove the bullets */
    }

    .nav-bar a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0.5rem;
        transition: all 0.3s ease;
    }

    .nav-bar a:hover {
    background-color: #555;
    }

</style>

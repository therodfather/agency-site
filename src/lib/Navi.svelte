<script>
  import {onMount} from 'svelte';
  import PocketBase from 'pocketbase';
  import {isLoggedIn} from './ligma.js';

  function logOutHandler() {
    onMount(async () => {
      const pb = new PocketBase('https://anij.bytecats.codes/pb');

      await new Promise(resolve => setTimeout(resolve, 2000));

      pb.authStore.clear();
      isLoggedIn.set(false);
    });
  }
</script>
<nav>
    <ul class="nav-bar">
        <li><a href="/intro">Home</a></li>
        <li><a href="/software">Software</a></li>
        <li><a href="/devops">DevOps</a></li>
        <li><a href="/cloud">Cloud</a></li> <li><a href="/project">Project</a></li>
        {#if !isLoggedIn}
            <li><a onclick="logOutHandler();" href="/login">Login</a></li>
        {/if}
        {#if isLoggedIn}
            <li><a onclick="logOutHandler();" href="/login">Log Out</a></li>
        {/if}

    </ul>
</nav>

<style>
    .nav-bar {
        position: fixed;      
        top: 0px;
        left: 0px;
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

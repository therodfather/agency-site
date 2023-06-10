<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Route, Router } from "svelte-navigator";
  import { isLoggedIn } from './lib/ligma.js';
  import Navi from './lib/Navi.svelte';
  import Intro from './lib/Intro.svelte';
  import Login from "./lib/Login.svelte";
  import About from "./lib/About.svelte";
  import ProtectedRoute from "./lib/ProtectedRoute.svelte";
  import { getCookie } from "./lib/cookie";

  let mainRef;

  onMount(async () => {
    // Check for a valid auth token and set isAuthenticated accordingly
    const authToken = getCookie("authToken");
    if (authToken) {
      isLoggedIn.set(true);
    } else {
      isLoggedIn.set(false);
    }

    mainRef.focus();
  });


</script>

<Navi />

<main bind:this={mainRef} tabindex="-1">
  <Router>
    <Route path="/login" component={Login}/>
    <Route path="about" component={About}/>
    <ProtectedRoute path="/intro" component={Intro} />
  </Router>
</main>

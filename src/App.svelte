<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Route, Router, navigate } from "svelte-navigator";
  import { isAuthenticated } from './lib/auth';
  import Navi from './lib/Navi.svelte';
  import Intro from './lib/Intro.svelte';
  import Login from "./lib/Login.svelte";
  import ProtectedRoute from "./lib/ProtectedRoute.svelte";

  onMount(async () => {
    // Check for a valid auth token and set isAuthenticated accordingly
    const authToken = getCookie('authToken');
    if (authToken) {
      isAuthenticated.set(true);
    } else {
      isAuthenticated.set(false);
    }
  });

  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  }
</script>

<Navi/>

<main>
  <Router>
    <ProtectedRoute path="/intro" component={Intro}/>
    <Route path="/login" component={Login}/>
  </Router>
</main>
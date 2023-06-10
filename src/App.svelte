<!-- src/App.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { Route, Router, navigate } from "svelte-navigator";
  import { isLoggedIn } from "./lib/store.js";
  import Navi from "./lib/Navi.svelte";
  import Intro from "./lib/Intro.svelte";
  import Login from "./lib/Login.svelte";
  import About from "./lib/About.svelte";
  import ProtectedRoute from "./lib/ProtectedRoute.svelte";
  import { getCookie } from "./lib/auth";

  onMount(async () => {
    // Check for a valid auth token and set isAuthenticated accordingly
    const authToken = getCookie("authToken");
    if (authToken) {
      isLoggedIn.set(true);
    } else {
      isLoggedIn.set(false);
    }
  });
</script>

<Navi />

<main>
  <Router>
    <ProtectedRoute path="/intro" component={Intro} />
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/about" component={About} />
  </Router>
</main>

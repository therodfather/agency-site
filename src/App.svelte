<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Navi from './lib/Navi.svelte';
  import Intro from './lib/Intro.svelte';
  import Login from "./lib/Login.svelte";
</script>
  
<Navi/>

<main>
  <Router>
    <Route path="/intro" component={Intro}/>
    <Route path="/login" component={Login}/>
  </Router>
</main>

<style>
  main {
    /*min-height: 100vh;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    font-family: Arial, sans-serif;
    color: white;
  }
</style>

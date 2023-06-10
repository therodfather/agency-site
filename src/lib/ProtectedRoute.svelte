<script lang="ts">
    import { Route } from 'svelte-navigator';
    import { isLoggedIn } from './store.js';
    import { navigate } from 'svelte-navigator';
  
    export let path: string; // Add this line
    export let component: any; // Add this line
    let props = {};
  
    $: if (!isLoggedIn) {
      navigate('/login');
    }
  </script>
  
  <Route {path} let:params>
    <svelte:component this={isLoggedIn? component : null} {...props} {params} />
  </Route>

<script lang="ts">
    import { Route } from 'svelte-navigator';
    import { isAuthenticated } from './auth';
    import { navigate } from 'svelte-navigator';
  
    export let path: string; // Add this line
    export let component: any; // Add this line
    let props = {};
  
    $: if (!$isAuthenticated) {
      navigate('/login');
    }
  </script>
  
  <Route {path} let:params>
    <svelte:component this={$isAuthenticated ? component : null} {...props} {params} />
  </Route>
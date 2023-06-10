<!--src/lib/ProtectedRoute.svelte-->
<script lang="ts">
    import { Route } from 'svelte-navigator';
    import { isLoggedIn } from './ligma.js';
    import { navigate } from 'svelte-navigator';
  
    export let path: string;
    export let component: any;
    let props = {};
  
    $: if (!isLoggedIn) {
      navigate('/login');
    }
  </script>
  
  <Route {path} let:params>
    <svelte:component this={isLoggedIn? component : null} {...props} {params} />
  </Route>

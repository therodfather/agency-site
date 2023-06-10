<!-- src/lib/Login.svelte -->
<script>
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';

    import { isLoggedIn } from './ligma.js';

    let pocketbase;
    let email = '';
    let password = '';
    let loginError = false;
    let isLoading = false;

    onMount(async () => {
    pocketbase = new PocketBase('https://auth.bytecats.codes');
    });

const login = async () => {
    isLoading = true;
    loginError = false;

    try {
        let authData = await pocketbase.admins.authWithPassword(email, password);

        if (!authData) {
        authData = await pocketbase.authWithPassword(email, password);
        }

    if (authData) {
        pocketbase.authStore.clear();
        isLoggedIn.set(true);
        loginError = false;
        } else {
        loginError = true;
        }
        console.log(authData);
    } catch (error) {
        console.error(error);
        loginError = true;
    } finally {
        isLoading = false;
    }
        };
</script>

<div class="login-container">
    <form on:submit|preventDefault={login}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} placeholder="Enter your password" required />
    </div>
    <button type="submit" disabled={isLoading}>
        {#if isLoading}
        <span class="spinner"></span>
        {:else}
        Login
        {/if}
    </button>
    {#if loginError}
        <p class="error-message">Invalid email or password. Please try again.</p>
    {/if}
    </form>
</div>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        padding: 1em;
        color: black;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
        margin-bottom: 1em;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 2em;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    width: 100%;
}

label {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.5em;
}

input {
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #494949;
}

  button {
    padding: 0.7em 1.2em;
    font-size: 1em;
    font-weight: bold;
    background-color: #4f98ca;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    display: flex; 
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    margin: 0.5em 0;
  }


  button:hover {
    background-color: #0d47a1;
}

.spinner {
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: #ffffff;
    border-radius: 50%;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin 0.6s linear infinite;
    display: flex; /* add this line */
    justify-content: center; /* add this line */
    align-items: center; /* add this line */
  }

@keyframes spin {
    to {
    transform: rotate(360deg);
    }
}

.error-message {
    color: red;
    margin-top: 1em;
    text-align: center;
}

</style>

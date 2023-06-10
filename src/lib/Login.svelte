<script>
    import { login } from "./auth";
    let isLoading = false;
    let loginError = false;

    let email = "";
    let password = "";
</script>

<form on:submit|preventDefault={login}>
    <label>
        Email:
        <input type="email" bind:value={email} required />
    </label>
    <label>
        Password:
        <input type="password" bind:value={password} required />
    </label>
    <button type="submit" disabled={isLoading}>
        {#if isLoading}
            <span class="spinner" />
        {:else}
            Login
        {/if}
    </button>
    {#if loginError}
        <p class="error-message">
            Invalid email or password. Please try again.
        </p>
    {/if}
</form>

<style>
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
    }

    input {
        padding: 0.5em;
        margin-right: 0.5rem;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
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
        display: flex;
        justify-content: center;
        align-items: center;
        animation: spin 0.6s linear infinite;
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

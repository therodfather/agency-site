<script>
import PocketBase from 'pocketbase';

    let email = '';
    let password = '';
    const pb = new PocketBase('https://auth.bytecats.codes');

    async function handleLogin() {
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );
        console.log(`Email: ${email}, Password: ${password}`);
    }

</script>

<div class="login-container">
<form on:submit|preventDefault={handleLogin}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} placeholder="Enter your email" required />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} placeholder="Enter your password" required />
    </div>
    <button type="submit">Login</button>
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
        /* background-color: #f5f5f5; */
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
    }

    button {
        padding: 0.5em 1em;
        font-size: 1em;
        font-weight: bold;
        background-color: #4f98ca;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0d47a1;
    }
</style>

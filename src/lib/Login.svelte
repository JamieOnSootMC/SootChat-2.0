<script lang="ts">
    import "../styles/Login.css";
    
    import { login } from "./PocketbaseHandler/UserHandler/Login";
    import { register } from "./PocketbaseHandler/UserHandler/Register";

    let email: string;
    let password: string;

    async function signup() {
        await register({
            email,
            password,
            passwordConfirm: password,
        });
    }

    async function handleLoginClick() {
        await login(email, password);
    }
</script>

<form on:submit|preventDefault>
    <input
        placeholder="Username (Email)"
        type="email"
        bind:value={email}
    />
    <input
        placeholder="Password"
        type="password"
        bind:value={password}
    />

    <button on:click={handleLoginClick}> Login </button>
    <button on:click={signup}> Register </button>
</form>

<script lang="ts">
    import "../styles/Login.css";
    
    import { login } from "./PocketbaseHandler/UserHandler/Login";    
    import { registering } from "./cache/store";
    
    let email: string;
    let password: string;

    function signup() {
        registering.set(true);
    }

    async function handleLoginClick() {
        await login(email, password);
    }
</script>

<form on:submit|preventDefault>
    <input
        name="email"
        placeholder="Username (Email)"
        type="email"
        bind:value={email}
    />
    <input
        name="password"
        placeholder="Password"
        type="password"
        bind:value={password}
    />

    <button on:click={handleLoginClick}> Login </button>
    <button on:click={signup}> Register </button>
</form>

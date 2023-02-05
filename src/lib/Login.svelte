<script lang="ts">
    import "../styles/Login.css";
    import { currentUser, pb } from "./pocketbase";

    let email: string;
    let password: string;

    async function login() {
        await pb.collection('users').authWithPassword(email, password);
    }

    async function signup() {
        const data = {
            email,
            password,
            passwordConfirm: password,
        }

        const createUser = await pb.collection('users').create(data);
        await login();
    }

    export function signout() {
        pb.authStore.clear();
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

    <button on:click={login}> Login </button>
    <button on:click={signup}> Register </button>
</form>

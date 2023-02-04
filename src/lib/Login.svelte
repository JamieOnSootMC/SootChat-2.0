<script lang="ts">
    import "../styles/Login.css";
    import { currentUser, pb } from "./pocketbase";
    import Servers from "./Servers.svelte";

    let username: string;
    let password: string;

    async function login() {
        await pb.collection('moderators').authWithPassword(username, password);
    }

    async function signup() {
        const data = {
            username,
            password,
            passwordConfirm: password,
        }

        const createUser = await pb.collection('moderators').create(data);
        await login();
    }

    export function signout() {
        pb.authStore.clear();
    }
</script>

<form on:submit|preventDefault>
    <input
        placeholder="username"
        type="text"
        bind:value={username}
    />
    <input
        placeholder="password"
        type="password"
        bind:value={password}
    />

    <button on:click={login}> Login </button>
    <button on:click={signup}> Register </button>
</form>

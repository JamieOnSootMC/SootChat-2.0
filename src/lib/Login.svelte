<script lang="ts">
    import { currentUser, pb } from "./pocketbase";

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

    function signout() {
        pb.authStore.clear();
    }
</script>

{#if $currentUser} 
    <p> Hello {$currentUser.username}</p>
{:else}
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
{/if}
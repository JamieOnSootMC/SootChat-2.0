<script lang='ts'>
    import Login from "./lib/Login.svelte";
    import Register from "./lib/Register.svelte";
    import Servers from "./lib/Servers.svelte";
    import ServerChat from "./lib/ServerChat.svelte";

    import { currentUser } from "./lib/PocketbaseHandler/pocketbase";
    import { chatViewing, error, registering } from "./lib/cache/store";
</script>



<h1> SootChat </h1>

{#if $currentUser}
    {#if $chatViewing}
        <ServerChat />
    {:else}
        <Servers />
    {/if}
{:else}
    {#if $registering}
        {#if $error == "password_not_match"}
            <p> Passwords do not match </p>
            <Register />
        {:else}
            <Register />
        {/if}
    {:else}
        {#if $error == "invalid_email"}
            <p> Invalid Email! </p>
            <Login />
        {:else if $error == "invalid_password"}
            <p> Incorrect Password </p>
            <Login />
        {:else}
            <Login />
        {/if}
    {/if}
{/if}
<script lang='ts'>
    import Login from "./lib/Login.svelte";
    import Register from "./lib/Register.svelte";
    import Servers from "./lib/Servers.svelte";
    import ServerChat from "./lib/ServerChat.svelte";

    import { currentUser } from "./lib/PocketbaseHandler/pocketbase";
    import { chatViewing, registering } from "./lib/cache/store";
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
        <Register />
    {:else}
        <Login />
    {/if}
{/if}
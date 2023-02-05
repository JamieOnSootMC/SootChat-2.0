<script lang='ts'>
    import Login from "./lib/Login.svelte";
    import { currentUser, pb } from "./lib/pocketbase";
    import Servers from "./lib/Servers.svelte";
    import ServerChat from "./lib/ServerChat.svelte";
</script>



<h1> SootChat </h1>

{#if $currentUser}
    <Servers />
{:else}
    <Login />
{/if}
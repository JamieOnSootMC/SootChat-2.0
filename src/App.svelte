<script lang='ts'>
    import Login from "./lib/Login.svelte";
    import { pb, currentUser } from "./lib/pocketbase";
    import Servers from "./lib/Servers.svelte";
</script>

<h1> SootChat </h1>

{#if currentUser}
    <Servers />
{:else}
    <Login />
{/if}
<script lang='ts'>
    import Login from "./lib/Login.svelte";
    import { currentUser } from "./lib/pocketbase";
    import Servers from "./lib/Servers.svelte";
</script>


<main>
    <h1> SootChat </h1>

    {#if currentUser}
        <Servers />
    {:else}
        <Login />
    {/if}
</main>

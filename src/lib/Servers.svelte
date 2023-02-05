<script lang="ts">
    import { pb } from "./PocketbaseHandler/pocketbase";
    import "../styles/Servers.css";

    let messages;

    function signout() {
        pb.authStore.clear();
    }

    async function gatherServers() {
        const servers = await pb.collection('servers').getFullList();
        return servers;
    }
</script>

<div class="servers">
    {#await gatherServers() then servers}
        {#each servers as server}
            <button> {server.serverName}</button>
        {/each}
    {/await}
</div>

<button on:click={signout}> Sign Out </button>



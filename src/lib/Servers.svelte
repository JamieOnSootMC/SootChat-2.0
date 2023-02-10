<script lang="ts">
    import { pb } from "./PocketbaseHandler/pocketbase";
    import { chatViewing, chatViewed } from "./cache/store";
    import "../styles/Servers.css";

    function signout() {
        pb.authStore.clear();
    }

    async function gatherServers() {
        const servers = await pb.collection('servers').getFullList();
        return servers;
    }

    function handleClick(serverName: string) {
        chatViewing.set(true);
        chatViewed.set(serverName);
    }
</script>

<div class="servers">
    {#await gatherServers() then servers}
        {#each servers as server}
            <button on:click={() => handleClick(server.serverName)}> {server.serverName}</button>
        {/each}
    {/await}
</div>

<button on:click={signout}> Sign Out </button>



<script lang="ts">
    import { pb, currentUser } from "./pocketbase";
    import "../styles/Servers.css";
    import getServerMessage from "./ServerChat.svelte";
    export const Servers = this;

    let messages;

    function signout() {
        pb.authStore.clear();
    }

    async function gatherServers() {
        const servers = await pb.collection('servers').getFullList();
        return servers;
    }

    function handleClick(serverName) {
     // When method is called, get all messages for the server and display them
     messages = new getServerMessage(serverName);
    }
</script>

{#await gatherServers() then servers}
    {#each servers as server}
        <div class="{server.serverName}">
            <button on:click={handleClick}> {server.serverName} </button>
        </div>
    {/each}
{/await}

{messages}
    {#each messages as message}
        <div class="{message.message}"> {message.message} </div>
    {/each}




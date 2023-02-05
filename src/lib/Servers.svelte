<script lang="ts">
    import { pb } from "./pocketbase";
    import "../styles/Servers.css";
    import getServerMessage from "./ServerChat.svelte";

    let chatSelected: boolean = false;    
    let messages;

    export function getChatSelected(): boolean {
        return chatSelected;
    }

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
        chatSelected = true;
    }
</script>

{#await gatherServers() then servers}
    {#each servers as server}
        <div class="{server.serverName}">
            <button> {server.serverName} </button>
        </div>
    {/each}
{/await}

<button on:click={signout}> Sign Out </button>



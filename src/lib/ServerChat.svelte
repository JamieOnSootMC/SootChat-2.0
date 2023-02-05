<script lang="ts">
    import { pb, currentUser } from "./PocketbaseHandler/pocketbase";
    import serverName from "./Servers.svelte";
    import { chatViewed, chatViewing } from "./cache/store";

    async function getServerMessage() {
        let lookupServer: string;
        chatViewed.subscribe((value) => {
            lookupServer = value;
        });
        const data = await pb.collection('messages').getFullList(200, {
            filter: `server_name = '${lookupServer}'`,
        });
        
        return data;
    }
</script>

<h1> test </h1>
{#await getServerMessage() then messages}
    {#each messages as message}
        <p> {message.message_content} </p>
    {/each}
{/await}

<button on:click={() => chatViewing.set(false)}> Back </button>
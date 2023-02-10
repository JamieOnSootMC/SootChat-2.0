<script lang="ts">
    import { pb } from "./PocketbaseHandler/pocketbase";
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

{#await getServerMessage() then messages}
    {#each messages as message}
        <p> {message.message_content} </p>
    {/each}
{/await}

<button on:click={() => chatViewing.set(false)}> Back </button>
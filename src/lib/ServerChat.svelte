<script lang="ts">
    import { pb, currentUser } from "./pocketbase";
    import serverName from "./Servers.svelte";

    let server: string = String.raw`${serverName}`;
    export function getServerMessage(server: string) {
        return pb.collection('messages').getFullList(200, {
            filter: `server_name = "${server}"`
        });
    }
</script>

<h1> test </h1>
{#await getServerMessage(server) then messages}
    {#each messages as message}
        <div class="{message.message}"> {message.message} </div>
    {/each}
{/await}
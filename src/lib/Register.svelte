<script lang="ts">
    import { error } from "./cache/store";
    import { register } from "./PocketbaseHandler/UserHandler/Register";

    let email: string;
    let password: string;
    let passwordConfirm: string;

    function handleRegisterClick() {
        if(password !== passwordConfirm) {
            error.set("password_not_match");
            return;
        }
        
        register({
            email,
            password,
            passwordConfirm,
        });
    }
</script>

<h1> Register for SootChat </h1>
<form on:submit|preventDefault>
    <input
        name="email"
        placeholder="Username (Email)"
        type="email"
        bind:value={email}
    />
    <input
        name="password"
        placeholder="Password"
        type="password"
        bind:value={password}
    />
    <input
        name="passwordConfirm"
        placeholder="Confirm Password"
        type="password"
        bind:value={passwordConfirm}
    />

    <button on:click={handleRegisterClick}> Register </button>
</form>
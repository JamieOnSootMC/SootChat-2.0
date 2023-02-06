import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('http://139.162.238.46:80');
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    currentUser.set(pb.authStore.model);
    if(!auth) return console.log("Logged out");
    console.log("Logged in as: " + pb.authStore.model.email)
});
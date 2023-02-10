import { writable } from "svelte/store";

export const registering = writable(false);
export const chatViewing = writable(false);
export const chatViewed = writable("none");
export const error = writable("none");
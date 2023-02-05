import { pb } from '../pocketbase';

export function signout() {
    pb.authStore.clear();
}
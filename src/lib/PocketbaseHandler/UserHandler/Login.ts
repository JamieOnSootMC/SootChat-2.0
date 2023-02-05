import { currentUser, pb } from '../pocketbase';

export async function login(username: string, password: string) {
    try {
        await pb.collection('users').authWithPassword(username, password);
    } catch (error) {
        console.log(error);
    }
}

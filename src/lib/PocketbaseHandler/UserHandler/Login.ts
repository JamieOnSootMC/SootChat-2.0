import { error } from '../../cache/store';
import { pb } from '../pocketbase';


export async function login(username: string, password: string) {
    const emailsArray = username.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

    try {
        if(emailsArray == null || !emailsArray.length) {
            console.log("Invalid Email");
            error.set("invalid_email");
            return;
        }

        await pb.collection('users').authWithPassword(username, password);
    } catch (error) {
        console.log(error);
        error.set("invalid_password");
    }
}

import { pb } from '../pocketbase';
import { login } from './Login';

export async function register(data: any) {
    await pb.collection('users').create(data);
    await login(data.email, data.password);
}
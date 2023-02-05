import { pb } from '../pocketbase';
import { login } from './Login';
import { registering } from '../../store';

export async function register(data: any) {
    await pb.collection('users').create(data);
    await login(data.email, data.password);

    registering.set(false);
}
import { writable } from 'svelte/store';

export const user = writable<null | any>(null);
export const isAuthenticated = writable<boolean>(false);
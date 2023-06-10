// src/lib/store.js
import { writable } from "svelte/store";
import PocketBase from 'pocketbase';

let isLoading = writable(false);
let loginError = writable(false);
function persistentStore(key, startValue) {
  const storedValue = localStorage.getItem(key);
  const initialValue = storedValue === null ? startValue : JSON.parse(storedValue);
  const store = writable(initialValue);

  store.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value))
  });

  return store;
}

export const pocketbase = new PocketBase('https://auth.bytecats.codes');

export const isLoggedIn = persistentStore('isLoggedIn', false)

export { isLoading, loginError };
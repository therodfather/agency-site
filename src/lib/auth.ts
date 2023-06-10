// src/lib/auth.ts
import { pocketbase, isLoggedIn, isLoading, loginError } from "./store";

export const login = async (email, password) => {
    isLoading.set(true);
    loginError.set(false);

    try {
        let AdminAuthData = await pocketbase.admins.authWithPassword(email, password);
        let UserAuthData;

        if (!AdminAuthData) {
            UserAuthData = await pocketbase.collection('users').authWithPassword(email, password);
        }

        if (AdminAuthData || UserAuthData) {
            pocketbase.authStore.clear();
            isLoggedIn.set(true);
            loginError.set(false);
        } else {
            loginError.set(true);
        }
        console.log(AdminAuthData);
    } catch (error) {
        console.error(error);
        loginError.set(true);
    } finally {
        isLoading.set(false);
    }
};


export function logOutHandler() {
    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
        console.log('Logging out...');
        pocketbase.authStore.clear();
        isLoggedIn.set(false);
        deleteCookie('auth_token');
        deleteCookie('AuthToken');
        deleteCookie('authToken');
    });
}



export function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export function deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    console.log("tried to delete cookie");
}
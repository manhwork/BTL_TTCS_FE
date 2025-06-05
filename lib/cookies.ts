import Cookies from "js-cookie";

export const setCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(name, value, {
        expires: options?.expires || 7, // 7 days by default
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        ...options,
    });
};

export const getCookie = (name: string) => {
    return Cookies.get(name);
};

export const removeCookie = (name: string) => {
    Cookies.remove(name, {
        path: "/",
        sameSite: "strict",
    });
};

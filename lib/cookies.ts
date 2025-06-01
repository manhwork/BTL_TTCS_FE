import Cookies from "js-cookie";

export const setCookie = (
    name: string,
    value: string,
    options?: Cookies.CookieAttributes
) => {
    Cookies.set(name, value, {
        expires: 7, // 7 days
        path: "/",
        ...options,
    });
};

export const getCookie = (name: string) => {
    return Cookies.get(name);
};

export const removeCookie = (name: string) => {
    Cookies.remove(name, { path: "/" });
};

"use client";

import { getCookie, removeCookie, setCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
    userId: string;
    email: string;
    role: string;
    fullName: string;
}

interface AuthContextType {
    user: User | null;
    isLoggedIn: boolean;
    login: (accessToken: string, refreshToken: string, userInfo: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        const userInfo = getCookie("userInfo");

        return JSON.parse(userInfo ? userInfo : "null");
    });
    const router = useRouter();

    const login = (
        accessToken: string,
        refreshToken: string,
        userInfo: User
    ) => {
        console.log("Login called with:", {
            accessToken,
            refreshToken,
            userInfo,
        });
        try {
            // Lưu token và thông tin user vào cookie với thời hạn
            setCookie("accessToken", accessToken, { expires: 7 }); // 7 ngày
            setCookie("refreshToken", refreshToken, { expires: 30 }); // 30 ngày
            setCookie("userInfo", JSON.stringify(userInfo), { expires: 7 }); // 7 ngày

            console.log("Cookies set, updating user state");
            setUser(userInfo);
            toast.success("Đăng nhập thành công!");
            router.push("/");
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Có lỗi xảy ra khi đăng nhập");
        }
    };

    const logout = () => {
        console.log("Logout called");
        removeCookie("accessToken");
        removeCookie("refreshToken");
        removeCookie("userInfo");
        setUser(null);
        toast.success("Đăng xuất thành công!");
        router.push("/");
    };

    console.log("Current user state:", user);
    console.log("Is logged in:", !!user);

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

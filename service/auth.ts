import http from "./http";

interface LoginResponse {
    code: number;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        userInfo: {
            userId: string;
            email: string;
            role: string;
            fullName: string;
        };
    };
}

export const login = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    const response = await http.post<LoginResponse>("/auth/login", {
        email,
        password,
    });
    return response.data;
};

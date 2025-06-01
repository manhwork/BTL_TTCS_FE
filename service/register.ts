import http from "./http";

interface RegisterResponse {
    code: number;
    message: string;
    data: {
        fullName: string;
        email: string;
        password: string;
        phone: string;
        avatar: string;
        role_id: string;
        status: string;
        deleted: boolean;
        _id: string;
        createdAt: string;
        updatedAt: string;
    };
}

export const register = async (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string,
    avatar: string,
    role_id: string,
    status: string
): Promise<any> => {
    const response = await http.post<RegisterResponse>("/accounts/create", {
        fullName,
        email,
        password,
        phone,
        avatar,
        role_id,
        status,
    });

    return response.data.data;
};

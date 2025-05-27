import http, { ResList } from "../http";

export const getTours = async (params: any): Promise<ResList> => {
    const response = await http.get("/tours", { params });
    return response.data.data;
};

export const getToursCategories = async (): Promise<ResList> => {
    const response = await http.get("/tour-categories");
    return response.data.data;
};

export const getTour = async (id: string) => {
    const response = await http.get(`/tours/detail/${id}`);
    return response.data.data;
};

import http, { ResList } from "../http";

export const getHotels = async (params: any): Promise<ResList> => {
    const response = await http.get("/hotels", { params });
    return response.data.data;
};

export const getHotelsCategories = async (): Promise<ResList> => {
    const response = await http.get("/hotel-categories");
    return response.data.data;
};

export const getHotel = async (id: string) => {
    const response = await http.get(`/hotels/detail/${id}`);
    return response.data.data;
};

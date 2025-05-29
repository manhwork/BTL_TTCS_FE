import http, { ResList } from "../http";

export const getFlights = async (params: any): Promise<ResList> => {
    const response = await http.get("/flights", { params });
    return response.data.data;
};

export const getFlightsCategories = async (): Promise<ResList> => {
    const response = await http.get("/flight-categories");
    return response.data.data;
};

export const getFlight = async (id: string) => {
    const response = await http.get(`/flights/detail/${id}`);
    return response.data.data;
};

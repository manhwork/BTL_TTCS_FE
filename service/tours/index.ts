import http, { ResList } from "../http";

export interface BookingTourRequest {
    tour_id: string;
    start_date: string;
    number_of_people: number;
    contact_info: {
        name: string;
        phone: string;
        email: string;
    };
    note?: string;
    total_price: number;
}

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

export const createBooking = async (data: BookingTourRequest) => {
    const response = await http.post("/tours/bookings/create", data);
    return response.data;
};

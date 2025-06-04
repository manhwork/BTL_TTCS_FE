import http from "./http";

interface RecommendTourRequest {
    destination: string;
    duration: string;
    budget: string;
    note?: string;
}

export const getGemini = {
    recommendTour: async (params: RecommendTourRequest) => {
        const response = await http.post("/gemini/recommend-tour", params);
        return response.data;
    },
};

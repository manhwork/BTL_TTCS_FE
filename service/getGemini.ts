import http from "./http";

interface RecommendTourRequest {
    destination: string;
    duration: string;
    budget: string;
    note?: string;
}

interface RecommendedTour {
    id: string;
    name: string;
}

interface RecommendTourResponse {
    code: number;
    message: string;
    data: {
        recommended: RecommendedTour[];
    };
}

export const getGemini = {
    recommendTour: async (params: RecommendTourRequest) => {
        const response = await http.post<RecommendTourResponse>(
            "/gemini/recommend-tour",
            params
        );
        return response.data;
    },
};

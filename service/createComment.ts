import http from "./http";

export const createComment = async (commentData: {
    tour_id: string;
    comment: string;
    rating: number;
}) => {
    try {
        const response = await http.post("/tours/reviews/create", commentData);
        return response.data;
    } catch (error) {
        console.error("Error creating comment:", error);
        throw error;
    }
};

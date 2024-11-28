import instance from "../utils/instance";

export const getFeedbackRequest = async () => {
    return await instance.get("/admin/feedback/answer");
};

export const getFeedbackCountRequest = async () => {
    return await instance.get("/admin/feedback/answercount");
};

export const addFeedbackRequest = async (data) => {
    return await instance.post("/feedback/add", data);
};
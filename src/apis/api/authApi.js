import instance from "../utils/instance";

export const signupRequest = async (data) => {
    try {
        const response = instance.post("/admin/auth/signup", data);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};
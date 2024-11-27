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

export const signinRequest = async (data) => {
    const response = await instance.post("/admin/auth/signin", data);
    return response;
};

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/admin/auth/oauth2/signup", data);
};

export const oAuth2MergeRequest = async (data) => {
    return await instance.post("/admin/auth/oauth2/merge", data);
};

export const deleteUserRequest = async(userId) =>{
    return await instance.delete(`/auth/user/${userId}`);
};
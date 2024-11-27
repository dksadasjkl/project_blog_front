import instance from "../utils/instance";

export const pointCheckRequest = async (data) => {
    return await instance.get(`/point?phonenumber=${data}`);
};

export const savePointRequest = async (data) => {
    return await instance.post("/point", data);
};

export const userSignupRequest = async (data) => {
    return await instance.post("/auth/signup", data);
};
import instance from "../utils/instance";


export const checkPasswordRequest = async (data) => {
    return await instance.put("/admin/account/password/check", data);
};
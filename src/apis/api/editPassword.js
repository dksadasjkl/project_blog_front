import instance from "../utils/instance";


export const editPasswordRequest = async (data) => {
    return await instance.put("/admin/account/password", data);
};
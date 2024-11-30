import instance from "../utils/instance";

export const registerLogoRequest = async (data) => {
    return await instance.put("/admin/account/logo", data);
};
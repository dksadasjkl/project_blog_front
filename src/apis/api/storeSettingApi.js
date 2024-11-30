import instance from "../utils/instance";


export const storeSettingRequest = async (data) => {
    return await instance.put("/admin/account/storesetting", data);
};
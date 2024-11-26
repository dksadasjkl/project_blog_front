import instance from "../utils/instance";

export const getPrincipalRequest = async () => {
    return await instance.get("/admin/account/principal");
}
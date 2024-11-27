import instance from "../utils/instance";

export const searchUserRequest = async () => {
    return await instance.get("/admin/account/users");
};
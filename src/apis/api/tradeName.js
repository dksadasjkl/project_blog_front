import instance from "../utils/instance";

export const editTradeNameRequest = async (data) => {
    return await instance.put("/admin/account/tradename", data)
};

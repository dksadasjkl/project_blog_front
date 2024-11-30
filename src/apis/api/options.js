import instance from "../utils/instance";

export const getAllCategoryRequest = async () => {
    return await instance.get("/menus/category");
};
import instance from "../utils/instance";

export const registerMenuRequest = async (data) => {
    return await instance.post("/admin/menu", data);
};

export const getMenuRequest = async (categoryId) => {
    return await instance.get(`/menus?categoryId=${categoryId}`);
};

export const updateMenuRequest = async (data) => {
    return await instance.put("/admin/menu", data);
};

export const deleteMenuRequest = async (menuId) => {
    return await instance.delete(`/admin/menu?menuId=${menuId}`);
};

export const orderRequest = async (data) => {
    return await instance.post("/order", data);
};
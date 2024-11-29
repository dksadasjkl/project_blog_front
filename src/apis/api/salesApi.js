import instance, { portOneInstance } from "../utils/instance";


export const getSalesRequest = async () => {
    return await instance.get("/admin/sales");
};

export const searchSalesByMenuRequest = async () => {
    return await instance.get("/admin/menusales");
};

export const getPaymentsRequest = async () => {
    return await portOneInstance.get("/payments", {
        headers: {
            Authorization: `PortOne ${process.env.REACT_APP_PORTONE_API_SECRET_KEY}`,
        },
        params: {
            requestBody: JSON.stringify({
                page: {
                    size: 1000,
                },
                filter: {
                    storeId: process.env.REACT_APP_STORE_ID,
                    isTest: true,
                },
            }),
        },
    });
};

export const paymentsCancelRequest = async (id) => {
    return await portOneInstance.post(
        `/payments/${id}/cancel`,
        {
            reason: "reason",
        },
        {
            headers: {
                Authorization: `PortOne ${process.env.REACT_APP_PORTONE_API_SECRET_KEY}`,
            },
        }
    );
};
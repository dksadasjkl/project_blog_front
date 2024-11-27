import * as PortOne from "@portone/browser-sdk/v2";

const storeId = "store-80cb0778-6778-48e6-94d4-b6af7956b1b9";
export const portOnePayRequest = async ({ orderName, totalAmount }) => {
    return await PortOne.requestPayment({
        storeId: process.env.REACT_APP_STORE_ID,
        channelKey: process.env.REACT_APP_CHANNEL_KEY,
        paymentId: `mid_${new Date().getTime()}`,
        currency: "CURRENCY_KRW",
        orderName: orderName,
        totalAmount: totalAmount,
        payMethod: "EASY_PAY",
        isTestChannel: true,
    });
};
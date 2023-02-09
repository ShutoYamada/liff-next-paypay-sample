import PAYPAY from "@paypayopa/paypayopa-sdk-node";

PAYPAY.Configure({
    clientId: process.env.PAYPAY_API_KEY as string,
    clientSecret: process.env.PAYPAY_API_SECRET as string,
    merchantId: process.env.PAYPAY_MERCHANTID,
    productionMode: false, 
});

export const reserve = async (options: any) => {
    const response = await PAYPAY.QRCodeCreate(options);
    if('BODY' in response) {
        return response.BODY;
    } else {
        throw new Error(response.ERROR);
    }
}

export const confirm = async (options: any) => {
    const response = await PAYPAY.GetPaymentDetails(Array(options));
    if('BODY' in response) {
        return response.STATUS;
    } else {
        throw new Error(response.ERROR);
    }
}
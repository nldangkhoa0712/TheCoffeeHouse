import toast from "react-hot-toast";
import { VoucherModel } from "../../models/voucher.model";
import { http } from "./http";
import { apiRouteConstants } from "../../constants/apiRoute.constants";

export const getListVoucher = async (): Promise<VoucherModel[]> => {
    try {
        const response = await http.get<VoucherModel[]>(
            apiRouteConstants.VOUCHER,
            {},
            {}
        )
        return response.value
    } catch (error) {
        toast.error(error)
        throw error
    }
}
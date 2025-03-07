export interface VoucherModel {
    id: number;
    code: string;
    description: string;
    discountType: 'VALUE' | 'PERCENT'; // Giả định chỉ có hai loại giảm giá
    discountValue: number;
    startDate: string; // ISO 8601 format
    endDate: string | null;
    usageLimit: number | null;
    limitPerUser: number;
    isActive: boolean;
    minOrderValue: number;
}
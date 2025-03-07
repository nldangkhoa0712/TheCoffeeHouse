export interface AddressModel {
    id: number,
    customerId: number,
    addressNumber: string,
    isDefault: boolean,
    ward: string,
    district: string,
    province: string,
    fullName: string,
    phoneNumber: string
}

export interface AddressDetail {
    addressNumber: string,
    provinces: string,
    districts: string,
    wards: string
}

export interface Location {
    name: string;
    name_en: string;
    full_name: string;
    full_name_en: string;
    latitude: string;
    longitude: string;
    tinh: string;
    quan: number;
    phuong: number;
}

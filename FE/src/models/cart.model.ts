import { ProductSize, ProductTopping } from "./product.model";

export interface CartModel {
    productSizeId: ProductSize,
    quantity: number,
    toppings: ProductTopping[]
}

export interface ToppingModel {
    id: number,
    quantity: number
    price: number
}

export interface CartDetail {
    id: number;
    toppingName: string;
    toppingPrice: number;
    isValid: boolean;
}

export interface CartItem {
    productId: number;
    quantity: number;
    productSizeId: number;
    productName: string;
    categoryName: string;
    productSizeName: string;
    price: number;
    imageDefaultNavigation: string | null;
    cartDetails: CartDetail[];
    cartId: number;
}

export type PayloadCartModel = {
    cartIds: number[]
    voucherId: number
    addressId: number
}
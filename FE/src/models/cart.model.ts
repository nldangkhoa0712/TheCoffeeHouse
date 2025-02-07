export interface CartModel {
    productSizeId: number,
    quantity: number,
    toppings: ToppingModel[]
}

export interface ToppingModel {
    id: number,
    quantity: number
}

interface CartDetail {
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
export interface CartModel {
    productSizeId: number,
    quantity: number,
    toppings: ToppingModel[]
}

export interface ToppingModel {
    id: number,
    quantity: number
}
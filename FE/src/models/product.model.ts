export interface AddProductRequest {
    productName: string,
    description: string,
    productSizes: ProductSize[],
    categoryId: string,
    isValid: boolean,
    images: File[],
    imageDefaultNavigation: File,
}

export interface ProductSize {
    id?: number,
    size: string,
    price: number,
    isValid: boolean
}

export interface ProductDetailsModel {
    productSizes: ProductSize[],
    images: any,
    category: { childCategory: any, id: number, categoryName: string },
    imageDefaultNavigation: any,
    toppings: ProductTopping[],
    id: number,
    productName: string,
    description: string,
    categoryId: number,
    isValid: true
}

export interface ProductTopping {
    id: number,
    toppingName: string,
    toppingPrice: number,
    isValid?: boolean
}

export interface ListReviewModel {
    review: ReviewModel[],
    isMax: boolean
}

export interface ReviewModel {
    productId: number,
    rating: number,
    comment: string
}
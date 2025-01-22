export interface AddProductRequest {
    productName: string,
    description: string,
    productSizes: ProductSize[],
    categoryId: string,
    isValid: boolean,
    images: File[],
    imageDefaultNavigation: File,
}

interface ProductSize {
    size: string,
    price: number,
    isValid: boolean
}
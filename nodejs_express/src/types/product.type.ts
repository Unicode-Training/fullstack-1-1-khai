export type ProductFilter = {
    q: string;
    fields: string;
    minPrice: string;
    maxPrice: string;
    page: number;
    limit: number;
    sort: string;
    order: string;
}

export type ProductSelect = {
    [key: string]: boolean;
}
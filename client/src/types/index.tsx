interface Product {
    features?: string[];
    image?: string;
    meta_description?: string,
    meta_title?: string,
    prod_invoice_title?: string,
    page_title?: string,
    name?: string,
    created_at?: string,
    _id?: string
    title?: string;
    views?: number;
}

interface Products {
    product: Product[]
}
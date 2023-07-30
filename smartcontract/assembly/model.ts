import { PersistentUnorderedMap, u128, context } from "near-sdk-as";

@nearBindgen
class Option {
    optionName: string;
    active: boolean;
}

@nearBindgen
export class Product {
    id: string;
    title: string;
    price: u128;
    owner: string;
    options: Option[];
    isWhite: boolean;

    public static fromPayload(payload: Product): Product {
        const product = new Product();
        product.id = payload.id;
        product.title = payload.title;
        product.price = payload.price;
        product.owner = context.sender;
        product.options = payload.options;
        product.isWhite = payload.isWhite;
        return product;
    }
}

export const listedProducts = new PersistentUnorderedMap<string, Product>("LISTED_PRODUCTS");
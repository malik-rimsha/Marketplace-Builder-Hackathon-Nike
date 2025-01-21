export interface product {
    [x: string]: ReactI18NextChildren
    | Iterable<ReactI18NextChildren>;

    _id: string;
    productName: string;
    _type: "product";
    image?: {
        url: any;
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    description: string;
    category: string;
    status: string;
    slug: {
        _type: "slug",
        current: string;
    };
}
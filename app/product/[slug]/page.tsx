import { client } from "@/sanity/lib/client";
import { product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HiShoppingCart } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductPageProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<product> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]  {
        _id,
        productName,
        status,
        category,
        colors,
        description,
        _type,
        price,
        image, 
        inventory,
        }`, { slug }
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square ">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.productName}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md ml-6 mt-8 "
                        />
                    )}
                </div>
                <div className=" flex flex-col gap-6 mt-10 ">
                    <h1 className="text-4xl font-bold">
                        {product.productName}
                    </h1>
                    <h1 className="text-lg font-bold text-[#9E3500]">
                        {product.status}
                    </h1>
                    <p className="text-lg text-gray-600 mb-1">
                        {product.category}
                    </p>
                    <p className=" tetx-sm text-slate-600">
                        {product.description}
                    </p>
                    <p className="text-lg text-gray-600 ">
                        {product.colors}
                    </p>
                    <p className="text-lg text-gray-600">
                        {product.inventory}
                    </p>
                    <p className="text-2xl font-bold">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(product.price)}
                    </p>
                    <Link href={"/cart"}>
                        <Button variant={"outline"} size={"lg"} className=" hover:text-white hover:bg-[#111111] mb-8">
                            Add to cart < HiShoppingCart />
                        </Button>
                    </Link>
                </div>

            </div>

        </div>
    )
}


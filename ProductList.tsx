
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";

const ProductList = () => {

  const [product, setProduct] = useState<product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: product[] = await client.fetch(allproducts)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  return (
    <div className="max-w-6xl max-auto px-4 py-8">
      <h1 className="flex font-semibold mb-4">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {product.map((product) => (
          <div key={product._id} className="p-4 ">

            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={270}
                  height={300}
                />
              )}
              <h1 className="text-sm text-[#9E3500]">
                {product.status}
              </h1>
              <h2 className="text-sm font-semibold">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                {product.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {product.colors}
              </p>
              <p className="text-sm mb-2">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </p>

              <button > Add To Cart <HiShoppingCart /> </button>

            </Link>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;












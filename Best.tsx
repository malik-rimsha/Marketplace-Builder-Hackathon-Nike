
"use client "

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { four } from "@/sanity/lib/queries";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi2";

const Best = () => {

  const [product, setProduct] = useState<product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct: product[] = await client.fetch(four)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  }, [])

  return (
    <div className="max-w-6xl max-auto px-4 py-8">
      <h1 className="flex font-semibold mb-4 ">
        Best Air Max
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((product) => (
          <div key={product._id} className="gap-6" >

            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={200}
                  height={200}
                  className="w-60 h-50 object-cover object-center"
                />
              )}
              <h1 className="text-sm text-[#9E3500]">
                {product.status}
              </h1>
              <h2 className="text-sm font-semibold ">
                {product.productName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                {product.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {product.colors}
              </p>
              <p className="text-sm mb-2">
                {product.price}
              </p>
              <button > Add To Cart <HiShoppingCart /> </button>
            </Link>
          </div>
        )

        )}
      </div>

    </div>
  )
}

export default Best



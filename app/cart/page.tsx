

"use client";
import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
// import { product } from "../../types/products";
import { urlFor } from "@/sanity/lib/image"; // Ensure urlFor is imported correctly
import Link from "next/link";
import { product } from "../../../types/products";

const CartPage = () => {
    const [cart, setCart] = useState<product[]>([]);  // Correctly type cart as 'product[]'

    useEffect(() => {
        // Fetch cart from localStorage
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));  // Parse and update cart state
        }
    }, []);

    const addToCart = (product: product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);  // Update state
        localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save updated cart in localStorage
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-[50px]">
            <h1 className="text-[28px] font-bold mb-[20px]">Your Cart</h1>
            {cart.length > 0 ? (
                <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                    {cart.map((product, index) => (
                        <div key={index} className="w-full bg-white shadow-lg p-[20px] rounded-[8px]">
                            <div className="aspect-square">
                                {product.image && (
                                    <img
                                        src={urlFor(product.image).url()} // Ensure urlFor is used to fetch the image URL
                                        alt={product.productName}
                                        width={500}
                                        height={500}
                                        className="rounded-lg shadow-md ml-6 mt-8"
                                    />
                                )}
                            </div>
                            <p className="font-bold text-[20px] mb-[8px]">{product.productName}</p>
                            <p className="text-[18px] mb-[8px]">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(product.price)}
                            </p>
                            <p className="line-clamp-2 text-gray-600 mb-[8px]">{product.description}</p>
                            <Link href={"/cart"}>
                                <Button variant={"outline"} size={"lg"} className="hover:text-white hover:bg-[#111111] mb-8">
                                    Add to Cart <HiShoppingCart />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-[18px]">Your cart is empty!</p>
            )}
        </div>
    );
};

export default CartPage;

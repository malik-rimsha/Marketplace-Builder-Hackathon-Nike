import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/cards"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"

import { gear1 } from "@/utils/data"

export function GearCarousel1() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {gear1.map((item) => (

                    <CarouselItem key={item.id} className="lg:basis-1/2">
                        <Link href={""}>
                            <div className="gap-1 mt-12">
                                <Card>
                                    <CardContent className=" bg-[#F5F5F5] aspect-square group ">
                                        <Image src={item.img} alt={"men"} width={440} height={440} />
                                    </CardContent>

                                </Card>
                            </div>
                            <div className=" flex justify-between mx-2 mt-2">
                                <h1 className="font-semibold text-xs">{item.title}</h1>
                                <h2 className="font-semibold text-xs text-[#111111]">{item.price}</h2>
                            </div>
                            <h3 className="ml-2 text-xs text-[#757575]">{item.title2}</h3>
                            <h4 className="ml-2 text-xs text-[#757575]">{item.title3}</h4>
                        </Link>
                    </CarouselItem>
                ))}

            </CarouselContent>
            <div className=" mb-4 absolute bottom-[390px] md:bottom-[430px] md:right-14 right-14 lg:bottom-[310px] xl:bottom-[380px]">
                <h1 className="font-semibold text-xs">shope Men's</h1>
                <CarouselPrevious />
                <CarouselNext />
            </div>

        </Carousel>
    )
}
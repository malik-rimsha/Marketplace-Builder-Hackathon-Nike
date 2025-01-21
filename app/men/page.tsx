import { Button } from "@/components/ui/button";
import { HiShoppingCart } from "react-icons/hi2";

export default function Men() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center px-6 lg:px-10">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 w-full flex justify-center my-6 lg:my-0 lg:ml-10">
        <img
          className="max-h-[400px] lg:max-h-[500px] object-contain"
          src="menshoe.png"
          alt="Nike Air Force 1"
        />
      </div>

      {/* Right Side: Text and Button */}
      <div className="lg:w-1/2 w-full px-6 lg:pl-10">
        {/* Product Title */}
        <h1 className="font-extrabold text-left text-2xl lg:text-3xl mb-4">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
        {/* Product Description */}
        <p className="text-left text-base lg:text-lg leading-7 mb-6">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside
          out"-inspired construction, including unique layering and exposed foam accents, ups the
          ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the
          Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        {/* Product Price */}
        <h2 className="font-extrabold text-left text-xl lg:text-3xl mb-4">
          ₹ 8,695.00
        </h2>
        <Button variant={"outline"} size={"lg"} className="text-[#111111]  hover:bg-black hover:text-white">
          Add to cart < HiShoppingCart />
        </Button>
      </div>
    </div>
  );
}


import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-4">
            {/* Main Container */}
            <div className="flex flex-wrap justify-between items-start gap-10 space-x-2 ml-10">

                {/* Column 1: FIND A STORE */}
                <div className="flex-1 min-w-[200px] mb-6 md:mb-0"> {/* Responsive margin-bottom on small screens */}
                    <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href={"/"} className="hover:underline">Become Link Member</Link></li>
                        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>

                {/* Column 2: GET HELP */}
                <div className="flex-1 min-w-[200px] mb-6 md:mb-0">
                    <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3: ABOUT NIKE */}
                <div className="flex-1 min-w-[200px] mb-6 md:mb-0">
                    <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media Icons */}
                <div className="flex justify-start lg:justify-end items-center gap-4 mt-4 w-full md:w-auto">
                    <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="text-xl cursor-pointer hover:text-gray-400" />
                    <FaYoutube className="text-xl cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
                </div>
            </div>

            {/* Bottom Section: Country, Copyright, and Links */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">

                {/* Country and Copyright */}
                <div className="flex mb-4 md:mb-0 gap-2">
                    <IoLocationOutline />
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

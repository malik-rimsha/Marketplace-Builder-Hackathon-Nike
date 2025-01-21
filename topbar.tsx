"use client";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
    return (
        <div className="w-full h-7 bg-[#F5F5F5] hidden md:flex items-center p-1 justify-between">
            <img className="h-6 w-6 ml-9" src="1logo.png" alt="Logo" />
            <ul className="text-black text-xs font-semibold flex items-center gap-6 mr-9">
                <Link href={"/"}><li>Find a Store </li></Link>
                <Link href={"/"}><li>Help</li></Link>
                <Link href={'Join'}><li>Join Us</li></Link>
                <Link href={"sign"}><li>Sign In</li></Link>
            </ul>
        </div>
    )
}



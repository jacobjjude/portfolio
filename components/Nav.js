"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Nav(){
    let pathname = usePathname();
    return (
        <nav className="mb-6 text-white flex space-x-6 p-4 w-full justify-center">
        <Link href="/" className={`hover:text-gray-300 ${pathname === "/" ? "text-blue-400" : ""}`}>
          <FaHome size={24} />
        </Link>
        <Link href="/about" className={`hover:text-gray-300 ${pathname === "/about" ? "text-blue-400" : ""}`}>
          <FaUser size={24} />
        </Link>
        <Link href="/work" className={`hover:text-gray-300 ${pathname === "/work" ? "text-blue-400" : ""}`}>
          <FaBriefcase size={24} />
        </Link>
        <Link href="/contact" className={`hover:text-gray-300 ${pathname === "/contact" ? "text-blue-400" : ""}`}>
          <FaEnvelope size={24} />
        </Link>
      </nav>
    )
}
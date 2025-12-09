"use client"

import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-screen">
      <div className="flex items-center justify-center px-8 py-6 relative w-full">
        <h1 className="text-2xl font-bold text-gray-900 absolute left-8">Viktor G</h1>
        <ul className="flex gap-8">
          <li 
            onClick={() => router.push("/")}
            className="cursor-pointer text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200 font-medium"
          >
            Home
          </li>
          <li 
            onClick={() => router.push("/about")}
            className="cursor-pointer text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200 font-medium"
          >
            About
          </li>
          <li 
            onClick={() => router.push("/projects")}
            className="cursor-pointer text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200 font-medium"
          >
            Projects
          </li>
          <li 
            onClick={() => router.push("/contact")}
            className="cursor-pointer text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200 font-medium"
          >
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
}
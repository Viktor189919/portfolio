"use client"

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {

  const router = useRouter()



  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-white shadow-md">
      <div className="h-full flex items-center justify-center px-8 relative w-full">
        <h1 className="text-2xl font-bold text-gray-900 sm:absolute sm:left-8 mr-auto">Viktor G</h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="sm:hidden cursor-pointer">
            <Menu size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <span onClick={() => router.push("/")}>Home</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span onClick={() => router.push("/about")}>About</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span onClick={() => router.push("/projects")}>Projects</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span onClick={() => router.push("/contact")}>Contact</span>
            </DropdownMenuItem>
          </DropdownMenuContent>

        </DropdownMenu>
        <ul className="gap-8 lg:ml-0 sm:flex sm:ml-auto hidden">
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
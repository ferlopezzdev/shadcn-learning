"use client"; // Marking this file as a Client Component

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "accordion", href: "accordion" },
  { name: "alert", href: "alert" },
  { name: "button", href: "button" },
  { name: "alert dialog", href: "alert-dialog" },
  { name: "dialog", href: "dialog" },
  { name: "badge", href: "badge" },
  { name: "calendar", href: "calendar" },
  { name: "avatar", href: "avatar" },
  { name: "card", href: "card" },
  { name: "carousel", href: "carousel" },
  { name: "checkbox", href: "checkbox" },
  { name: "command", href: "command" },
  { name: "combobox", href: "combobox" },
  { name: "context menu", href: "context-menu" },
  { name: "menu bar", href: "menu-bar" },
  { name: "input OTP", href: "input-otp" },
  { name: "progress", href: "progress" },
  { name: "sheet", href: "sheet" },
  { name: "skeleton", href: "skeleton" },
  { name: "slider", href: "slider" },
  { name: "soner", href: "soner" },
  { name: "toast", href: "toast" },
  { name: "tabs", href: "tabs" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                aria-expanded={isSidebarOpen}
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
              <Link href="/" className="text-xl font-bold flex items-center lg:ml-2.5">
                {/* Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="208"
                    y1="128"
                    x2="128"
                    y2="208"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="192"
                    y1="40"
                    x2="40"
                    y2="192"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
                <span className="self-center whitespace-nowrap ml-2">Learning Shadcn/ui</span>
              </Link>
            </div>
            <div className="flex items-center">
              {/* User Avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
      <div className={`flex overflow-hidden bg-white pt-16 ${isSidebarOpen ? 'lg:flex' : 'lg:flex lg:flex-row-reverse'}`}>
        <aside
          id="sidebar"
          className={`fixed z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${isSidebarOpen ? 'block' : 'hidden'}`}
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-1 pb-2">
                  {links.map((link) => {
                    const isActive = currentPath === `/dashboard/${link.href}` || 
                                    (currentPath.startsWith(`/dashboard/${link.href}`) && 
                                    (currentPath.length === `/dashboard/${link.href}`.length || 
                                    currentPath[`/dashboard/${link.href}`.length] === '/'));
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`text-base capitalize font-normal rounded-lg flex items-center p-2 group ${
                            isActive ? 'bg-blue-500 text-white' : 'text-gray-900 hover:bg-gray-100'
                          }`}
                        >
                          <span className="ml-3">{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <main>
            <div className="pt-6 px-4">
              <div className="w-full min-h-[calc(100vh-230px)]">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">{children}</div>
              </div>
            </div>
          </main>
          <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4 print:hidden">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-gray-500 hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="text-sm text-gray-500">
              © 2023 <Link href="#" className="hover:underline">Company Name™</Link>. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

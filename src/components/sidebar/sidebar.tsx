'use client';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaChartGantt } from "react-icons/fa6";
import { MdOutlineGroups2 } from "react-icons/md";
import { IoSettings } from "react-icons/io5";



export const Sidebar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: <AiOutlineDashboard size={28} /> },
        { name: "Projects", href: "/projects", icon: <FaChartGantt size={28} /> },
        { name: "Team", href: "/team", icon: <MdOutlineGroups2 size={28} /> },
        { name: "Settings", href: "/settings", icon: <IoSettings size={28} /> },
    ];

    return (
        <Navbar
            position="static"
            className={`h-screen ${!collapsed ? "w-64" : "w-16 [&>header]:px-0"} flex-col justify-start rounded-none max-sm:w-full max-sm:h-auto border bg-zinc-300 transition-all ease-in-out `}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            
        >
            <NavbarContent className="sm:hidden pl-4" justify="start">
                <NavbarMenuToggle aria-label="Open menu" icon={<GiHamburgerMenu size={28} />}  />
                <NavbarBrand>
                    <p className="font-bold text-inherit">My App Sidebar</p>
                </NavbarBrand>
            </NavbarContent>

            {!collapsed ?
                <NavbarContent className="hidden sm:flex sm:flex-col items-start pt-4" justify="start">
                    <NavbarBrand className="mb-6 flex items-center justify-between w-full">
                        <p className="font-bold text-inherit">My App Sidebar</p>
                        <Button onPress={() => setCollapsed(true)} className="bg-transparent"><MdOutlineKeyboardDoubleArrowLeft size={24} /></Button>
                    </NavbarBrand>

                    {menuItems.map((item, index) => (
                        <NavbarItem key={index} className="w-full rounded-md data-[active]:bg-default-100 data-[active]:py-2  transition-all" isActive={pathname === item.href}>
                            <Link
                                href={item.href}
                                className="w-full px-4 py-2 rounded hover:bg-default-100 transition-colors"
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                :
                <NavbarContent className="hidden sm:flex sm:flex-col items-start pt-4 gap-4 max-w-16" >
                    <NavbarBrand className="mb-6 flex flex-col max-w-14">
                        <Button onPress={() => setCollapsed(false)} className="bg-transparent pl-5 max-w-16"><GiHamburgerMenu size={28} /></Button>
                    </NavbarBrand>

                    {menuItems.map((item, index) => (
                        <NavbarItem key={index} className="w-full flex items-center align-center data-[active]:bg-default-100 transition-colors" isActive={pathname === item.href}>
                            <Link
                                href={item.href}
                                className="w-full px-4 py-2 rounded hover:bg-default-100 transition-colors"
                            >
                                {item.icon}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            }

            <NavbarMenu className="pt-4">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index} className="data-[active]:bg-default-100 transition-all data-[active]:p-2 rounded-md" isActive={pathname === item.href}>
                        <Link
                            href={item.href}
                            className="w-full"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    );
}
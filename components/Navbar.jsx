"use client"
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Menu, MenuIcon } from 'lucide-react'
import { signOut } from 'next-auth/react';

export default function Navbar() {
    return (
        <>
            <div className="flex justify-around items-center mb-10 w-full h-28 bg-slate-950">
                <div className=''>
                    <Link className='text-xl md:text-2xl font-bold text-slate-300' href={"/"}>Pawn Billing</Link>
                </div>
                <div className='flex gap-2 sm:gap-5'>
                    <Link href={"/SignIn"} className='hover:scale-105 transition 1s ease-in-out py-4 px-6 md:px-10 bg-white text-slate-950 font-semibold rounded-lg'>Sign In</Link >
                    <div className='flex'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='text-white'><Menu /></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <Link href={"/UserProfile"}><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                                <DropdownMenuSeparator />
                                <Link href={"/Admin/Pledging"}><DropdownMenuItem>Pledging</DropdownMenuItem></Link>
                                <Link href={"/Admin/Redemption"}><DropdownMenuItem>Redemption</DropdownMenuItem></Link>
                                <Link href={"/Admin/Reports"}><DropdownMenuItem>Reports</DropdownMenuItem></Link>
                                <DropdownMenuSeparator />
                                <Link href={"/Admin/Settings"} ><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                                <Link href={""} onClick={() => signOut()} ><DropdownMenuItem>Logout</DropdownMenuItem></Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    )
}

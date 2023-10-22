import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className='h-[649px] overflow-hidden items-center flex justify-center'>
                <div className='flex gap-10'>
                    <Link href={"/Admin/Settings/"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Settings</Link>
                    <Link href={"/Admin/Reports/Pledging"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Pledging Reports</Link>
                    <Link href={"/Admin/Reports/Redemption"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Redemption Reports</Link>
                </div>
            </div>
        </>
    )
}
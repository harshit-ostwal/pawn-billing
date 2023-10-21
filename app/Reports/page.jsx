import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='h-[649px] overflow-hidden items-center flex justify-center'>
        <div className='flex gap-10'>
          <Link href={"/Pledging"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Daily Reports</Link>
          <Link href={"/Redemption"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Monthly Reports</Link>
          <Link href={"/Reports"} className='text-gray-500 px-10 py-5 bg-slate-950 rounded-3xl hover:scale-105 transition 1s ease-in-out hover:text-white'>Yearly Reports</Link>
        </div>
      </div>
    </>
  )
}

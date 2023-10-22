"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

export default function page() {
    const { data: session } = useSession();

    return (
        <>
            <div className='text-black'>{session?.user?.txtemailid}</div>
            <div className='text-black'>{session?.user?.txtrole}</div>
        </>
    )
}

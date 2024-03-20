'use client'
import React from 'react';
import {signIn} from "next-auth/react";
import {getURL} from "next/dist/shared/lib/utils";
import {usePathname, useSearchParams} from "next/navigation";

const Page = () => {
    const url = useSearchParams()
    const callbackURL = url.get('callbackUrl')
    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <button className='p-3 border-r-2 bg-amber-100'
                onClick={()=>signIn('google', {
                    callbackUrl: callbackURL || '/profile'
                })}>Sign In</button>
        </div>
    );
};
export default Page;
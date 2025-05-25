import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <div className='w-screen flex h-16'>
            <Link href='/main'
            className='py-1 px-2 hover:border-amber-950 rounded-2xl border-2 my-1.5 ml-1 w-36 flex justify-center items-center'
            >Main</Link>
            <Link href='/main'
            className='py-1 px-2 hover:border-amber-950 rounded-2xl border-2 my-1.5 ml-1 w-36 flex justify-center items-center'
            >{"Main XD"}</Link>
        </div>
    );
};

export default Navigation;
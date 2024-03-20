'use client'
import React from 'react';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Navigation = () => {
    const session = useSession()
    return (
        <div className='flex justify-center align-middle bg-blue-600'>
            <Link className='p-3' href={'/kira'}>Posts</Link>
            <Link className='p-3' href={'/makima'}>Makima</Link>
            {
                session.data?.user
                    ?
                    <>
                        <Link className='p-3' href=''>
                            {session.data.user.image
                                ? <img src={session.data.user.image} alt='user avatar'></img>
                                : 'Profile'
                            }
                        </Link>
                        <button className='p-3' onClick={()=>signOut()}>Sign out</button>
                    </>
                    : <Link className='p-3' href='/signin'>Sign In</Link>
            }
        </div>
    );
};

export default Navigation;
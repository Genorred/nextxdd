import React from 'react';
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'kira',
    description: 'cold'
}
const Layout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;
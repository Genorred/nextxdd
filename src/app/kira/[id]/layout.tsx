import React from 'react';
import {Metadata} from "next";
export interface Props {
    params: {
        id: string
    }
    children: React.ReactNode
}
export const generateMetadata = async({params: {id}}: Props): Promise<Metadata> => {
    return {
        title: id
    }
}
const Layout = ({children, params}: Readonly<Props>) => {
    return (
        <div>
            <strong><h1>{params.id}</h1></strong>
            {children}
        </div>
    );
};

export default Layout;
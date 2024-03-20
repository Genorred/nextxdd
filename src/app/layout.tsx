import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import './a.sass'
import {SessionProvider} from "next-auth/react";
import Providers from "@/components/Providers";
import Navigation from "@/components/Navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Navigation/>
            {children}
        </Providers>
        </body>
        </html>
    );
}

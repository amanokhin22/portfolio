import './globals.css';
import type {Metadata} from 'next';
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ReduxProvider} from "@/app/provider";

export const metadata: Metadata = {
    title: 'Portfolio Artem Manokhin',
    description: 'Front-end developer',
}

function RootLayout({
                        children,
                    }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </ReduxProvider>
        </body>
        </html>
    )
}

export default RootLayout;

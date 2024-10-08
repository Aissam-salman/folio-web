import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Porte folio Salman",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"
              className="!scroll-smooth scrollbar scrollbar-track-rounded-full scrollbar-corner-[#0c0511]  scrollbar-thumb-slate-50 scrollbar-track-[#0c0511] h-32 overflow-y-scroll">
        <body className={inter.className}>{children}</body>
        </html>
    );
}

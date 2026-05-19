import { Viewport } from "next"
import './globals.css'

import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta property="og:title" content="Jose's Webpage" />
                <meta
                    property="og:description"
                    content="Data Science, machine Learning, Python & Julia"
                />
                <meta
                    name="google-site-verification"
                    content="Z8eB-LcCtKoVuPT1qEVRbQzeV5rpJ7Tt_OHjkkJJrKM"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                var stored = localStorage.getItem('theme');
                                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                if (stored === 'dark' || (!stored && prefersDark)) {
                                    document.documentElement.setAttribute('data-theme', 'dark');
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

import { Viewport } from "next"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "@/components/header"
import Footer from "@/components/footer"

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children, }: {
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
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

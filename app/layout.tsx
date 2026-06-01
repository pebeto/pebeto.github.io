import { Metadata, Viewport } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import './globals.css'

import Header from "@/components/header"
import Footer from "@/components/footer"

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.joseesparza.me"),
    title: {
        default: "Jose Esparza | Senior ML Engineer",
        template: "%s · Jose Esparza",
    },
    description: "Senior ML Engineer shipping production LLM systems with LangGraph, RAG and fine-tuned Llama models. Open-source Julia maintainer.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Jose Esparza | Senior ML Engineer",
        description: "Senior ML Engineer shipping production LLM systems with LangGraph, RAG and fine-tuned Llama models. Open-source Julia maintainer.",
        url: "https://www.joseesparza.me",
        siteName: "Jose Esparza",
        type: "website",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jose Esparza — Senior ML Engineer" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jose Esparza | Senior ML Engineer",
        description: "Senior ML Engineer shipping production LLM systems with LangGraph, RAG and fine-tuned Llama models. Open-source Julia maintainer.",
        images: ["/og.png"],
    },
};

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="google-site-verification"
                    content="Z8eB-LcCtKoVuPT1qEVRbQzeV5rpJ7Tt_OHjkkJJrKM"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Jose Esparza",
                            "url": "https://www.joseesparza.me",
                            "image": "https://www.joseesparza.me/profile.jpeg",
                            "jobTitle": "Senior Machine Learning Engineer",
                            "description": "Senior ML Engineer shipping production LLM systems with LangGraph, RAG and fine-tuned Llama models. Open-source Julia maintainer.",
                            "sameAs": [
                                "https://github.com/pebeto",
                                "https://linkedin.com/in/josesparza",
                                "https://orcid.org/0000-0002-9372-3763",
                            ],
                            "alumniOf": [
                                {
                                    "@type": "CollegeOrUniversity",
                                    "name": "Universidad Privada del Norte",
                                },
                                {
                                    "@type": "CollegeOrUniversity",
                                    "name": "University of London",
                                },
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Trujillo",
                                "addressRegion": "La Libertad",
                                "addressCountry": "PE",
                            },
                        }),
                    }}
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
            <body className={ibmPlexSans.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

'use client';

import Link from "next/link";
import { getRandomSubheader } from "@/services/subheaders";
import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
    const [subheader, setSubheader] = useState('');

    useEffect(() => {
        setSubheader(getRandomSubheader());
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/now', label: 'Now' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/tools', label: 'Tools' },
    ];

    return (
        <header className="border-b border-[var(--color-border)]">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 py-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight text-[var(--color-heading)]">
                            Jose Esparza
                        </h1>
                        <p className="text-xs text-[var(--color-text-faint)] tracking-wide uppercase mt-1">
                            Trujillo, Peru · UTC-5
                            {subheader && <> · {subheader}</>}
                        </p>
                    </div>

                    <nav className="flex flex-wrap items-center gap-0">
                        {navLinks.map((link, i) => (
                            <span key={link.href} className="flex items-center">
                                {i > 0 && (
                                    <span className="px-3 text-xs text-[var(--color-text-faint)]">/</span>
                                )}
                                <Link
                                    href={link.href}
                                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
                                >
                                    {link.label}
                                </Link>
                            </span>
                        ))}
                        <span className="px-3 text-xs text-[var(--color-text-faint)]">/</span>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
                        >
                            Resume ↗
                        </a>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}

'use client';

import { useState, useEffect } from 'react';

export default function EmailLink() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <span className="cursor-default">Email</span>;
    }

    const user = "joseesparzadc";
    const domain = "gmail.com";
    return <a href={`mailto:${user}@${domain}`}>Email</a>;
}

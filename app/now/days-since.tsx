'use client';

import { useState, useEffect } from "react";
import { getDaysSinceDate } from "@/utils";

export default function DaysSince() {
    const [daysSince, setDaysSince] = useState<number>(0);

    useEffect(() => {
        setDaysSince(getDaysSinceDate("2026-05-18"));
    }, []);

    return (
        <p className="text-sm text-[var(--color-text-faint)]">
            Last update: {daysSince} days ago
        </p>
    );
}

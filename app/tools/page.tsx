import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tools",
};

export default async function Tools() {
    const devTools = [
        { title: "Shell", value: "zsh", desc: "Switched from bash for better plugin support.", href: null },
        { title: "Text editor", value: "Neovim", desc: "My swiss army knife. Using it since my first year of college.", href: "https://neovim.io/" },
        { title: "Terminal", value: "foot", desc: "A nice terminal written in C.", href: "https://codeberg.org/dnkl/foot" },
        { title: "Database", value: "DataGrip", desc: "Free educational license through my MSc program.", href: "https://www.jetbrains.com/datagrip/" },
        { title: "Browser", value: "Helium", desc: "Simplicity, no privacy concerns. Avoiding bloat.", href: "https://helium.computer/" },
        { title: "Code assistant", value: "OpenCode", desc: 'Running sakamakismile/Qwen3.6-27B-Text-NVFP4-MTP. I prefer to "operate" it and understand the solution before using it.', href: "https://opencode.ai/" },
    ];

    const personalTools = [
        { title: "Daily notes", value: "Moleskine notebook", desc: "Paper keeps my mind focused and avoids digital distractions.", href: "https://www.moleskine.com/en-us/" },
        { title: "Agenda", value: "Org Mode", desc: "Used in Neovim via nvim-orgmode. Never miss a birthday message.", href: "https://orgmode.org/" },
        { title: "Note-taking", value: "Traveler's notebook", desc: "Passport size — doubles as a wallet. Always with me.", href: "https://shop.travelerscompanyusa.com/products/travelers-notebook-passport-size-brown" },
        { title: "Syncing", value: "Syncthing", desc: "Self-hosted file sync. No third-party services.", href: "https://syncthing.net/" },
    ];

    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-16">
            <section>
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-5">
                    Why this page?
                </h2>
                <p className="text-[var(--color-text)] leading-relaxed">
                    Good tools shape good work. In college I kept handing tool
                    recommendations to classmates. This page is the grown-up
                    version of that habit.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-5">
                    OS
                </h2>
                <div className="text-[var(--color-text)] leading-relaxed">
                    <p>
                        <Link href="https://archlinux.org/" target="_blank" className="font-semibold text-[var(--color-heading)]">
                            Arch Linux
                        </Link>{" "}
                        on Thinkpad T470 and desktop. Window manager is{" "}
                        <Link href="https://swaywm.org/" target="_blank">
                            Sway
                        </Link>
                        — I'm in the fields of Wayland.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                    Development tools
                </h2>
                <div className="space-y-5">
                    {devTools.map((tool) => (
                        <div key={tool.value} className="border-t border-[var(--color-border-light)] pt-5">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-sm text-[var(--color-text-faint)] uppercase tracking-wider">{tool.title}</span>
                                {tool.href ? (
                                    <Link href={tool.href} target="_blank" className="font-semibold text-[var(--color-heading)]">
                                        {tool.value}
                                    </Link>
                                ) : (
                                    <span className="font-semibold text-[var(--color-heading)]">{tool.value}</span>
                                )}
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)] mt-2">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-[var(--color-heading)]">
                    Personal tools
                </h2>
                <div className="space-y-5">
                    {personalTools.map((tool) => (
                        <div key={tool.value} className="border-t border-[var(--color-border-light)] pt-5">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-sm text-[var(--color-text-faint)] uppercase tracking-wider">{tool.title}</span>
                                <Link href={tool.href} target="_blank" className="font-semibold text-[var(--color-heading)]">
                                    {tool.value}
                                </Link>
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)] mt-2">{tool.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

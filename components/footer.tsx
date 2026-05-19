export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] mt-24">
            <div className="max-w-6xl mx-auto px-12 py-10 text-sm text-[var(--color-text-faint)]">
                Jose Esparza · {new Date().getFullYear()}
            </div>
        </footer>
    );
}

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-dhaba-dark">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-dhaba-orange">404</h1>
                <p className="mb-4 text-xl text-white/70">Oops! Page not found</p>
                <Link
                    href="/"
                    className="text-dhaba-orange underline hover:text-dhaba-amber transition-colors"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}

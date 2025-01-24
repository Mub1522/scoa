import { Head, Link } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
        <>
            <Head title="Bienvenido" />
            <div className="bg-gray-50 text-black/50">
                <header className="grid grid-cols-1 items-center gap-2 py-10 lg:grid-cols-3">
                    <nav className="flex flex-1">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="relative flex min-h-screen flex-col items-center justify-center">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <h1>Hola</h1>
                            </div>
                        </main>

                    </div>
                </div>
                <footer className="py-16 text-center text-sm text-black">
                    Hecho con amor ♥
                </footer>
            </div>
        </>
    )
}
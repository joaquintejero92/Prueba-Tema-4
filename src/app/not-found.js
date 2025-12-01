import Link from "next/link"

function NotFound() {
    return (
        <section className="min-h-screen max-w-5xl mx-auto flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl text-blue-200 font-bold">
                Página no encontrada
            </h1>
            <img
                src="/not-found.webp"
                alt=""
                width={400}
                height={400}
            />
            <p className="text-lg text-slate-600">La página que estás buscando no se ha encontrado. </p>
            <p className="text-lg text-slate-600">Puedes volver al inicio pulsando <Link href={"/"} className="text-blue-600 underline"> aquí</Link>.</p>
        </section>
    )
}

export default NotFound
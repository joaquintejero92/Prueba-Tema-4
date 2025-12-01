import { obtenerLibroAPI } from "@/lib/data";
import Link from "next/link";
import { notFound } from 'next/navigation'


async function PaginaLibro({ params }) {

    const { id } = await params
    const libro = await obtenerLibroAPI(id)
    if (!libro) notFound()

    return (
        <section className="min-h-screen max-w-5xl mx-auto px-10 py-10">
            <Link href="/libros-api" className="fixed p-2 bg-orange-300 rounded-full"> &lt;- Volver </Link>
            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                Libro #{libro.id}
            </h1>
            <div className="flex flex-col gap-10 items-center mt-20 p-10 bg-blue-100 rounded-xl">
                <p className="text-6xl place-self-center">{libro.titulo}</p>
                <p className="text-2xl place-self-center text-slate-400">{libro.editorial}</p>
                <p className="text-7xl place-self-center text-blue-400 *:font-bold">{libro.fecha.toLocaleString()}</p>
            </div>
        </section>
    );
}

export default PaginaLibro;
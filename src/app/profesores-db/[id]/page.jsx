import Link from "next/link";
import { obtenerProfesorDB } from "@/lib/data";
import { notFound } from 'next/navigation'



async function PaginaProfesor({ params }) {
    const { id } = await params
    const profesor = await obtenerProfesorDB(id)
    if (!profesor) notFound()

    return (
        <section className="min-h-screen max-w-5xl mx-auto px-10 py-10">
            <Link href="/profesores-db" className="fixed p-2 bg-orange-300 rounded-full"> &lt;- Volver </Link>
            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                Profesor #{profesor.id}
            </h1>
            <div className="flex flex-col gap-10 items-center mt-20 p-10 bg-blue-100 rounded-xl">
                <p className="text-6xl place-self-center">{profesor.nombre}</p>
                <p className="text-2xl place-self-center text-slate-400">{profesor.especialidad}</p>
                <p className="text-7xl place-self-center text-blue-400 *:font-bold">{profesor.estado_civil}</p>
            </div>
        </section>
    );
}

export default PaginaProfesor;
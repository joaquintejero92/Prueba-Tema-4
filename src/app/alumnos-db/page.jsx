import { Suspense } from "react";
import Link from "next/link";

import Fallback from "@/components/fallback";
import Alumnos from "@/components/db-alumnos";
import AlumnoNuevo from "@/components/db-alumno-nuevo";



async function AlumnosPage({ searchParams }) {
    let { query } = await searchParams
    query ??= ''

    console.log(query)

    return (
        <section className="min-h-screen max-w-5xl mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                BASE DE DATOS
            </h1>


            <AlumnoNuevo />


            <Suspense fallback={<Fallback>Obteniendo datos ... </Fallback>}>
                <Alumnos query={query} />
            </Suspense>
        </section>
    );
}

export default AlumnosPage;
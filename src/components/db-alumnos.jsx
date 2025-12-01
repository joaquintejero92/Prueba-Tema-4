import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarAlumnoDB } from '@/lib/actions'
import { obtenerAlumnosDB } from '@/lib/data'
import AlumnoEditarDB from './db-alumno-editar'



async function Alumnos({ query }) {

    const alumnos = await obtenerAlumnosDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de alumnos
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {alumnos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((alumno) => (
                        <div key={alumno.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/alumnos-db/${alumno.id}`}>{alumno.nombre}</Link>
                            <div className='flex gap-6'>
                                <AlumnoEditarDB alumno={alumno} />
                                <form>
                                    <input type="hidden" name='id' value={alumno.id} />
                                    <button formAction={eliminarAlumnoDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Alumnos




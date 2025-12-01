import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerAlumnosAPI } from '@/lib/data'
import { eliminarAlumnoAPI } from '@/lib/actions'
import AlumnoEditarAPI from './api-alumno-editar'





async function Alumnos({ query }) {

    const alumnos = await obtenerAlumnosAPI(query)


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de alumnos (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {alumnos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((alumno) => (
                        <div key={alumno.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/alumnos-api/${alumno.id}`}>{alumno.nombre}</Link>
                            <div className='flex gap-6'>
                                <AlumnoEditarAPI alumno={alumno} />
                                <form>
                                    <input type="hidden" name='id' value={alumno.id} />
                                    <button formAction={eliminarAlumnoAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
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




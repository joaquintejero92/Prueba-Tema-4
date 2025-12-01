import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarProfesorDB } from '@/lib/actions'
import { obtenerProfesoresDB } from '@/lib/data'
import ProfesorEditarDB from './db-profesor-editar'



async function Profesores({ query }) {

    const profesores = await obtenerProfesoresDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de profesores
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {profesores.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((profesor) => (
                        <div key={profesor.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/profesores-db/${profesor.id}`}>{profesor.nombre}</Link>
                            <div className='flex gap-6'>
                                <ProfesorEditarDB profesor={profesor} />
                                <form>
                                    <input type="hidden" name='id' value={profesor.id} />
                                    <button formAction={eliminarProfesorDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Profesores




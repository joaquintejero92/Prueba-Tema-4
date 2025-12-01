import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarAutorDB } from '@/lib/actions'
import { obtenerAutoresDB } from '@/lib/data'
import AutorEditarDB from './db-autor-editar'



async function Autores({ query }) {

    const autores = await obtenerAutoresDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de autores
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {autores.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((autor) => (
                        <div key={autor.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/autores-db/${autor.id}`}>{autor.nombre}</Link>
                            <div className='flex gap-6'>
                                <AutorEditarDB autor={autor} />
                                <form>
                                    <input type="hidden" name='id' value={autor.id} />
                                    <button formAction={eliminarAutorDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Autores




import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerAutoresAPI } from '@/lib/data'
import { eliminarAutorAPI } from '@/lib/actions'
import AutorEditarAPI from './api-autor-editar'





async function Autores({ query }) {

    const autores = await obtenerAutoresAPI(query)


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de autores (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {autores.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((autor) => (
                        <div key={autor.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/autores-api/${autor.id}`}>{autor.nombre}</Link>
                            <div className='flex gap-6'>
                                <AutorEditarAPI autor={autor} />
                                <form>
                                    <input type="hidden" name='id' value={autor.id} />
                                    <button formAction={eliminarAutorAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
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




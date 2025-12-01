import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerLibroAPI } from '@/lib/data'
import { eliminarLibroAPI } from '@/lib/actions'
import LibroEditarAPI from './api-libro-editar'





async function Libros({ query }) {

    const libros = await obtenerLibrosAPI(query)


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de libros (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {libros.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((libro) => (
                        <div key={libro.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/libros-api/${libro.id}`}>{libro.nombre}</Link>
                            <div className='flex gap-6'>
                                <LibroEditarAPI libro={libro} />
                                <form>
                                    <input type="hidden" name='id' value={libro.id} />
                                    <button formAction={eliminarLibroAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
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




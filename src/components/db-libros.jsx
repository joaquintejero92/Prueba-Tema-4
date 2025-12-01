import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarLibroDB } from '@/lib/actions'
import { obtenerLibrosDB } from '@/lib/data'
import LibroEditarDB from './db-libro-editar'



async function Libros({ query }) {

    const libros = await obtenerLibrosDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de libros
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {libros.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((libro) => (
                        <div key={libro.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/libros-db/${libro.id}`}>{libro.titulo}</Link>
                            <div className='flex gap-6'>
                                <LibroEditarDB libro={libro} />
                                <form>
                                    <input type="hidden" name='id' value={libro.id} />
                                    <button formAction={eliminarLibroDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Libros




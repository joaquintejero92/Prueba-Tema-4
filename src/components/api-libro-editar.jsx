'use client'
import { editarLibroAPI } from "@/lib/actions";
import { useState } from "react";


function LibroEditarAPI({ libro }) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible &&
                <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
                    <input type="hidden" name='id' defaultValue={libro.id} />

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        required
                        id='titulo'
                        name='titulo'
                        defaultValue={libro.titulo}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='especialidad'>editorial:</label>
                    <input
                        required
                        id='editorial'
                        name='editorial'
                        defaultValue={libro.editorial}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='fecha'>fecha publicacion</label>
                    <input
                        required
                        id='fecha'
                        name='fecha'
                        defaultValue={libro.fecha}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarProfesorAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                            Actualizar profesor
                        </button>
                    </div>
                </form>
            }
            <span onClick={() => setVisible(!visible)}>
                {visible ? "✖" : "📝"}
            </span>
        </>
    );
}

export default ProfesorEditarAPI;
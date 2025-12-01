'use client'
import { editarAutorDB } from "@/lib/actions";
import { useState } from "react";


function AutorEditarDB({ autor }) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible &&
                <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
                    <input type="hidden" name='id' defaultValue={autor.id} />

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        required
                        id='nombre'
                        name='nombre'
                        defaultValue={autor.nombre}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='localidad'>Localidad:</label>
                    <input
                        required
                        id='localidad'
                        name='localidad'
                        defaultValue={autor.localidad}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='premioNobel'>Premio Nobel</label>
                    <input
                        id='premioNobel'
                        name='premioNobel'
                        type='checkbox'
                        defaultChecked={autor.premioNobel === true}
                        className='w-5 h-5'
                    />

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarAutorDB} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                            Actualizar autor
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

export default AutorEditarDB;
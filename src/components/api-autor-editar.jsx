'use client'
import { editarAutorAPI } from "@/lib/actions";
import { useState } from "react";


function AutorEditarAPI({ autor }) {
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

                    <label htmlFor="premioNobel">Premio Nobel</label>
                    <select
                        id="premioNobel"
                        name="premioNobel"
                        defaultValue={autor.premioNobel ? "true" : "false"}
                        className="p-1 border border-slate-200"
                    >
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarAutorAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
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

export default AutorEditarAPI;
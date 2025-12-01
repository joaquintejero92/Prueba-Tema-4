'use client'
import { editarProfesorDB } from "@/lib/actions";
import { useState } from "react";


function ProfesorEditarDB({ profesor }) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible &&
                <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
                    <input type="hidden" name='id' defaultValue={profesor.id} />

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        required
                        id='nombre'
                        name='nombre'
                        defaultValue={profesor.nombre}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='especialidad'>Especialidad:</label>
                    <input
                        required
                        id='especialidad'
                        name='especialidad'
                        defaultValue={profesor.especialidad}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='estado_civil'>Estado civil</label>
                    <input
                        required
                        id='estado_civil'
                        name='estado_civil'
                        defaultValue={profesor.estado_civil}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarProfesorDB} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
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

export default ProfesorEditarDB;
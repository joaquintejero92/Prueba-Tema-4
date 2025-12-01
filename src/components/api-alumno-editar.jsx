'use client'
import { editarAlumnoAPI } from "@/lib/actions";
import { useState } from "react";


function AlumnoEditarAPI({ alumno }) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible &&
                <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
                    <input type="hidden" name='id' defaultValue={alumno.id} />

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        required
                        id='nombre'
                        name='nombre'
                        defaultValue={alumno.nombre}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='localidad'>Localidad:</label>
                    <input
                        required
                        id='localidad'
                        name='localidad'
                        defaultValue={alumno.localidad}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='fecha_nacimiento'>Fecha de nacimiento</label>
                    <input
                        required
                        id='fecha_nacimiento'
                        name='fecha_nacimiento'
                        type='date'
                        defaultValue={alumno.fecha_nacimiento}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarAlumnoAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                            Actualizar alumno
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

export default AlumnoEditarAPI;
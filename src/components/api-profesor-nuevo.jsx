import { nuevoProfesorAPI } from "@/lib/actions";


function ProfesorNuevoAPI() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='especialidad'>Especialidad:</label>
            <input required id='especialidad' name='especialidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='estado_civil'>Estado civil</label>
            <input required id='estado_civil' name='estado_civil' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoProfesorAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar profesor
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default ProfesorNuevoAPI;
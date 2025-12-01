import { nuevoAutorAPI } from "@/lib/actions";


function AutorNuevoAPI() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='localidad'>Localidad:</label>
            <input required id='localidad' name='localidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='premioNobel'>Premio Nobel</label>
            <input id='premioNobel' name='premioNobel' type='checkbox' className='w-5 h-5'/>

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoAutorAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar autor
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default AutorNuevoAPI;
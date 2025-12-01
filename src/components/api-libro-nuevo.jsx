import { nuevoLibroAPI } from "@/lib/actions";


function LibroNuevoAPI() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='titulo'>Titulo</label>
            <input required id='titulo' name='titulo' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='editorial'>Editorial:</label>
            <input required id='editorial' name='editorial' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='fecha'>Fecha de publicacion</label>
            <input required id='fecha' name='fecha' type='date' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoLibroAPI} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar libro
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default LibroNuevoAPI;
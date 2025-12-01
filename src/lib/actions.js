'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";


// BASE DE DATOS


export async function nuevoAutorDB(formData) {
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const premioNobel = formData.get('premioNobel') ==='on'

    const sql = 'insert into autores (nombre, localidad, premioNobel) values (?, ?, ?)'
    const values = [nombre, localidad, premioNobel];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/autores-db')
}


export async function editarAutorDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const premioNobel = formData.get('premioNobel')

    const sql = 'update autores set nombre=?, localidad=?, premioNobel=? where id=?'
    const values = [nombre, localidad, premioNobel, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/autores-db')
}




export async function eliminarAutorDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from autores where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/autores-db')
}



export async function nuevoLibroDB(formData) {
    const titulo = formData.get('titulo')
    const editorial = formData.get('esditorial')
    const fecha = formData.get('fecha')

    const sql = 'insert into libros (titulo, editorial, fecha) values (?, ?, ?)'
    const values = [titulo, editorial, fecha];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/libros-db')
}


export async function editarLibroDB(formData) {
    const id = formData.get('id')
    const titulo = formData.get('titulo')
    const editorial = formData.get('editorial')
    const fecha = formData.get('fecha')

    const sql = 'update libros set titulo=?, editorial=?, fecha=? where id=?'
    const values = [titulo, editorial, fecha, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/libros-db')
}




export async function eliminarLibroDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from libros where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/libros-db')
}





// API

export async function nuevoAutorAPI(formData) {

    const nombre = formData.get('nombre');
    const localidad = formData.get('localidad');

    // Convertimos checkbox → boolean
    const premioNobel = formData.get('premioNobel') === 'on';

    const response = await fetch('http://localhost:3000/autores-api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            localidad,
            premioNobel,
            createdAt: new Date().toISOString()
        })
    });

    const data = await response.json();

    revalidatePath('/autores-api');
}


export async function editarAutorAPI(formData) {
    const id = formData.get('id');
    const nombre = formData.get('nombre');
    const localidad = formData.get('localidad');

    // Convertimos checkbox → boolean
    const premioNobel = formData.get('premioNobel') === 'on';

    const response = await fetch('http://localhost:3000/autores-api' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            localidad,
            premioNobel,
            updatedAt: new Date().toISOString()
        })
    });

    const data = await response.json();

    revalidatePath('/autores-api');
}



export async function eliminarAutorAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3000/autores/' + id, { method: 'DELETE' })

    revalidatePath('/autores-api')
}


export async function nuevoLibroAPI(formData) {
    const [titulo, editorial, fecha] = formData.values()

    const response = await fetch('http://localhost:3000/libros', {
        method: 'POST',
        body: JSON.stringify({ titulo, editorial, fecha, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/libros-api')
}


export async function editarLibroAPI(formData) {
    const [id, titulo, editorial, fecha] = formData.values()

    const response = await fetch('http://localhost:3000/libros/' + id, {
        method: 'PUT',
        body: JSON.stringify({ titulo, editorial, fecha, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/libros-api')
}


export async function eliminarLibroAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3000/libros/' + id, { method: 'DELETE' })

    revalidatePath('/libros-api')
}




// --------------------------- AUTENTICACIÓN -----------------



const usuarios = [
    { nombre: 'ana', key: 'ana' },
    { nombre: 'eva', key: 'eva' },
]

export async function login(formData) {
    const LOGIN_URL = '/'

    // Obtener usuario datos del formulario
    const name = formData.get('name')
    const email = formData.get('email')
    const key = formData.get('key')
    const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

    // Comprobar si credenciales son válidas
    // const authenticated = true  // suponemos que son válidas
    const encontrado = usuarios.find(usuario => name == usuario.nombre && key == usuario.key)

    if (!encontrado) return

    // Si hay autenticación correcta, creamos cookie de sesión
    await setCookie('session', { name, email })

    redirect(callbackUrl);
}



export async function logout() {
    // Eliminamos cookie de sesión
    await deleteCookie('session')

    // redirect("/");   // No recarga si ya estamos en esta página

    // Hack to reload page! https://github.com/vercel/next.js/discussions/49345#discussioncomment-6120148
    redirect('/?' + Math.random())

}





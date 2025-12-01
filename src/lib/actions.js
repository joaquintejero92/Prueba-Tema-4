'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";


// BASE DE DATOS


export async function nuevoAlumnoDB(formData) {
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const fecha_nacimiento = formData.get('fecha_nacimiento')

    const sql = 'insert into alumnos (nombre, localidad, fecha_nacimiento) values (?, ?, ?)'
    const values = [nombre, localidad, fecha_nacimiento];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/alumnos-db')
}


export async function editarAlumnoDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const localidad = formData.get('localidad')
    const fecha_nacimiento = formData.get('fecha_nacimiento')

    const sql = 'update alumnos set nombre=?, localidad=?, fecha_nacimiento=? where id=?'
    const values = [nombre, localidad, fecha_nacimiento, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/alumnos-db')
}




export async function eliminarAlumnoDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from alumnos where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/alumnos-db')
}



export async function nuevoProfesorDB(formData) {
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const estado_civil = formData.get('estado_civil')

    const sql = 'insert into profesores (nombre, especialidad, estado_civil) values (?, ?, ?)'
    const values = [nombre, especialidad, estado_civil];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/profesores-db')
}


export async function editarProfesorDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const estado_civil = formData.get('estado_civil')

    const sql = 'update profesores set nombre=?, especialidad=?, estado_civil=? where id=?'
    const values = [nombre, especialidad, estado_civil, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/profesores-db')
}




export async function eliminarProfesorDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from profesores where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/profesores-db')
}





// API

export async function nuevoAlumnoAPI(formData) {
    const [nombre, localidad, fecha_nacimiento] = formData.values()

    const response = await fetch('http://localhost:3001/alumnos', {
        method: 'POST',
        body: JSON.stringify({ nombre, localidad, fecha_nacimiento, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/alumnos-api')
}


export async function editarAlumnoAPI(formData) {
    const [id, nombre, localidad, fecha_nacimiento] = formData.values()

    const response = await fetch('http://localhost:3001/alumnos/' + id, {
        method: 'PUT',
        body: JSON.stringify({ nombre, localidad, fecha_nacimiento, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/alumnos-api')
}


export async function eliminarAlumnoAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/alumnos/' + id, { method: 'DELETE' })

    revalidatePath('/alumnos-api')
}


export async function nuevoProfesorAPI(formData) {
    const [nombre, especialidad, estado_civil] = formData.values()

    const response = await fetch('http://localhost:3001/profesores', {
        method: 'POST',
        body: JSON.stringify({ nombre, especialidad, estado_civil, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/profesores-api')
}


export async function editarProfesorAPI(formData) {
    const [id, nombre, especialidad, estado_civil] = formData.values()

    const response = await fetch('http://localhost:3001/profesores/' + id, {
        method: 'PUT',
        body: JSON.stringify({ nombre, especialidad, estado_civil, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/profesores-api')
}


export async function eliminarProfesorAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/profesores/' + id, { method: 'DELETE' })

    revalidatePath('/profesores-api')
}




// --------------------------- AUTENTICACIÓN -----------------



const usuarios = [
    { nombre: 'usuario1', key: 'usuario1' },
    { nombre: 'usuario2', key: 'usuario2' },
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





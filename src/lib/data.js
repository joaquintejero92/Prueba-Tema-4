'use server'

import { db } from '@/lib/db'



// BASE DE DATOS

export async function obtenerAutoresDB(query) {
    const sql = 'select * from `autores` where nombre like ?';
    const values = ["%" + query + "%"]
    // const values = ['%teclado%', "%a%"]
    const [autores] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return autores
}


export async function obtenerAutorDB(id) {
    const sql = 'select * from autores where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}


export async function obtenerLibrosDB(query) {
    const sql = 'select * from `libros` where titulo like ?';
    const values = ["%" + query + "%"]
    // const values = ['%teclado%', "%a%"]
    const [libros] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return libros
}


export async function obtenerLibroDB(id) {
    const sql = 'select * from libros where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API


export async function obtenerAutoresAPI(query) {
    const response = await fetch('http://localhost:3000/autores/')
    const autores = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return autores.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerAutorAPI(id) {
    const response = await fetch('http://localhost:3000/autores/' + id)
    if (!response.ok) return null
    const autor = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return autor
}



export async function obtenerLibrosAPI(query) {
    const response = await fetch('http://localhost:3000/libros/')
    const libros = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return libros.filter(a => a.titulo.toLowerCase().includes(query))
}



export async function obtenerLibroAPI(id) {
    const response = await fetch('http://localhost:3000/libros/' + id)
    if (!response.ok) return null
    const libro = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return libro
}



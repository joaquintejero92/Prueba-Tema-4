'use server'

import { db } from '@/lib/db'



// BASE DE DATOS

export async function obtenerAlumnosDB(query) {
    const sql = 'select * from `alumnos` where nombre like ?';
    const values = ["%" + query + "%"]
    // const values = ['%teclado%', "%a%"]
    const [alumnos] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return alumnos
}


export async function obtenerAlumnoDB(id) {
    const sql = 'select * from alumnos where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}


export async function obtenerProfesoresDB(query) {
    const sql = 'select * from `profesores` where nombre like ?';
    const values = ["%" + query + "%"]
    // const values = ['%teclado%', "%a%"]
    const [profesores] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return profesores
}


export async function obtenerProfesorDB(id) {
    const sql = 'select * from profesores where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API


export async function obtenerAlumnosAPI(query) {
    const response = await fetch('http://localhost:3001/alumnos')
    const alumnos = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return alumnos.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerAlumnoAPI(id) {
    const response = await fetch('http://localhost:3001/alumnos/' + id)
    if (!response.ok) return null
    const alumno = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return alumno
}



export async function obtenerProfesoresAPI(query) {
    const response = await fetch('http://localhost:3001/profesores')
    const profesores = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return profesores.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerProfesorAPI(id) {
    const response = await fetch('http://localhost:3001/profesores/' + id)
    if (!response.ok) return null
    const profesor = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return profesor
}



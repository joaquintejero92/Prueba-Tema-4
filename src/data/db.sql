DROP DATABASE IF EXISTS biblioteca;

CREATE DATABASE biblioteca;
USE biblioteca;


CREATE TABLE autores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    premioNobel BOOLEAN,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE alumnos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO alumnos (nombre, localidad, premioNobel) 
VALUES 
  ('José', 'Montilla', 'Yes'),
  ('Juan', 'Lucena', 'No'),
  ('Ana', 'Lucena', 'No');


  CREATE TABLE libros (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    editorial VARCHAR(200),
    fecha DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE profesores ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO libros (titulo, editorial, fecha) 
VALUES 
  ('Quijote', 'Anaya', '2000-01-01'),
  ('Futbol', 'Marca', '2007-01-01'),  
  ('Matematicas', 'Anaya', '2019-01-01');
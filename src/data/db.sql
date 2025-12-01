DROP DATABASE IF EXISTS escuela;

CREATE DATABASE escuela;
USE escuela;


CREATE TABLE alumnos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_nacimiento DATE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE alumnos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO alumnos (nombre, localidad, fecha_nacimiento) 
VALUES 
  ('José', 'Montilla', '2000-01-01'),
  ('Juan', 'Lucena', '2000-01-01'),
  ('Ana', 'Lucena', '2000-01-01');


  CREATE TABLE profesores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(200),
    estado_civil VARCHAR(200),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ALTER TABLE profesores ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

INSERT INTO profesores (nombre, especialidad, estado_civil) 
VALUES 
  ('José Profe', 'Matemáticas', 'Casado'),
  ('Juan Profe', 'Lengua', 'Casado'),
  ('Ana Profe', 'Inglés', 'Casado');
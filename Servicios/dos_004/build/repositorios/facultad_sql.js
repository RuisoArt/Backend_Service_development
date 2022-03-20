"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_FACULTAD = void 0;
exports.SQL_FACULTAD = {
    //TODAS:'SELECT f.cod_facultad AS Cod, f.nombre_facultad AS Nombre \
    //        FROM facultades f'
    TODAS: 'SELECT \
    CASE \
        WHEN d.tipo_docente=1 THEN \'Decano\' \
        WHEN d.tipo_docente=2 THEN \'Docente Titular\' \
        WHEN d.tipo_docente=3 THEN \'Docente Asociad\' \
        WHEN d.tipo_docente=4 THEN \'Docente Asistente\' \
        WHEN d.tipo_docente=5 THEN \'Docente Auxiliar\' \
        WHEN d.tipo_docente=6 THEN \'Otro\' \
    END AS TipoDocente, \
    d.cod_docente AS codDocente, d.documento_docente AS DocumentoDocente, d.nombres_docente AS NombresDocentes, \
    d.apellidos_docente AS ApellidoDocente, f.nombre_facultad \
    FROM docentes d \
    INNER JOIN facultades f \
    ON d.cod_facultad = f.cod_facultad '
};

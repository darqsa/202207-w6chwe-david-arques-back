# README

## DDBB

### Collection:

Robots

### Document model:

Robot

- Nombre
- Imagen (URL de internet)
- Características:
  - Velocidad (0-10)
  - Resistencia (0-10)
  - Fecha de creación

## Endpoints

- [GET] /robots -> devuelve un array con todos los robots de la BD

- [GET] /robots/:idRobot -> devuelve un robot de la BD por id

- [DELETE*] /robots/delete/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id

- [POST*] /robots/create -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado

- [PUT*] /robots/update -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado

\*Las request con POST, PUT y DELETE estarán protegidas con un token, que debe pasarse por query param. P.e.: **/robots/create?token=ejemplo\***

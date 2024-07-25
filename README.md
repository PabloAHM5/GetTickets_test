# GetTickets Project

Este proyecto está diseñado para consumir servicios GraphQL utilizando Axios en Node.js. Implementa el patrón de diseño Screenplay y sigue las tareas especificadas para consumir, procesar y reportar resultados de los tickets.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:

git clone https://github.com/PabloAHM5/GetTickets_test

2. Clona este repositorio:
npm install

## Estructura del Proyecto
#### index.js: Punto de entrada principal del proyecto. Orquesta el flujo principal del programa.
#### actors/user.js: Define el actor que realizará las tareas.
#### tasks/signIn.js: Realiza la tarea de autenticación y obtiene el token.
#### tasks/getTickets.js: Realiza la tarea de obtener los tickets utilizando el token obtenido.
#### questions/processTickets.js: Procesa y filtra la respuesta de los tickets.
#### utils/report.js: Genera el reporte de los resultados.

## Uso
Para ejecutar el proyecto, simplemente corre:

node index.js



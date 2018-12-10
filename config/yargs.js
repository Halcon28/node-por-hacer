const descripcion = {
	demand: true,
	alias: 'd',
	desc: "Descripción de la tarea por hacer"
};

const completado = {
	demand: true,
	alias: 'c',
	default: true,
	desc: "Define si la tarea esta terminada o no"
};

const argv_var = require( 'yargs' )
	.command( 'crear', 'Agrega una tarea por hacer a la lista', {descripcion})
	.command( 'actualizar', 'Actualiza a terminado una tarea que estaba pendiente', {descripcion, completado})
	.command( 'borrar', 'Elimina una tarea por hacer de la lista', {descripcion})
	.help()
	.argv;

module.exports = {
	args: argv_var
};
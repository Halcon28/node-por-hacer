const colors = require('colors');
const { args } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
let comando = args._[0];

switch( comando ){
	case 'crear':
		let tarea = porHacer.crear( args.descripcion );
		console.log(tarea);
		break;
	case 'listar':
		let listado = porHacer.getListado();
		listado.forEach( (tarea, index) => {
			console.log(`=======TAREA # ${index + 1}======`.green);
			console.log(tarea.descripcion);
			console.log(`Estado: ${tarea.completado}`);
			console.log(`=======================\n`.green);

		});
		break;
	case 'actualizar':
		let actualizado = porHacer.actualizar(args.descripcion, args.completado);
		console.log( actualizado );
		break;
	case 'borrar':
		let borrado = porHacer.borrar( args.descripcion );
		console.log( borrado );
		break;
	default:
		console.log('Comando no reconocido');
		break;
}

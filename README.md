## Comandos de git

Muestra las diferencias entre el ultimo commit y los cambios actuales
```
	git diff
```

Muestra las diferencias entre el ultimo commit y los cambios actuales en el stage
```
	git diff --staged
```

Elimina un archivo del stage
```
	git reset HEAD "Archivo.ext"
```

Regresa los cambio al ultimo commit
```
	git checkout -- "Archivo.ext"
```

Realiza el stage y commit al mismo tiempo
```
	git commit -am "mensaje"
```

Actualiza el mensaje del ultimo commit
```
	git commit --amend -m "mensaje nuevo"
```

Resetea el ultimo commit manteniendo los cambios actuales(despues se debe de hacer el commit normal)
```
	git reset --soft HEAD^
```

Resete el proyecto al commit deseado perdiento los cambios mas recientes
```
	git reset --hard bfa8d59
```

Cambia el nombre a un archivo manteniendo el registro de git
```
	git mv "archivo.ext"
```

Elimina un archivo del repositorio
```
	git rm "archivo.ext"
```

Renombrar un archivo sin git
```
	Primero se renombra sin git y despues se corren los comandos
	git add -u
	git add -A
```

Edliminar un archivo sin git
```
	Primero se elimina sin git y despues se corren los comandos
	git add -u
```

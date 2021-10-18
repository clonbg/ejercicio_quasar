# Buscar archivos en Linux por nombre o contenido
#### 22/03/2020

Para buscar archivos en nuestro sistema vamos a usar el comando *find*. Por ejemplo para buscar un archivo que contenga feet en cualquier parte de su nombre, en todo el sistema:
	
    find / -iname "*feet*"

Con *-iname* no diferencia entre mayúsculas y minúsculas, con *-name* si.

Y para buscar por el contenido de los ficheros echamos mano de *grep*. Por ejemplo si queremos buscar un archivo que contenga la frase “esos gusanos estaban buenos” en nuestro home:
	
    grep -r -i "esos gusanos estaban buenos" /home/nombreUsuario

Visto en [redeszone](https://www.redeszone.net)

Salu2
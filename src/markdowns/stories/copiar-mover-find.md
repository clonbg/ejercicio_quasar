# Buscar archivos y copiar/mover con *find*
#### 08/02/2020

Vamos a ver como copiar o mover archivos a la vez que los buscas. Este es el resultado de un problema, tuve que buscar archivos en la raiz de mi disco y después moverlos a la carpeta que yo quería. Encontré esta solución:

    find . -type f -iname 'searchFile.*' -exec cp {} ~/Documentos \;

Veamos las partes y que es lo que hacen:
- ".", el lugar desde donde va a buscar, el punto significa que va a empezar donde estés ubicado
- "-type f", busca ficheros, podría ponerse una "d" y buscaría diectorios
- "-iname", no es sensible a mayúsculas
- "'searchFile.*'", el nombre del archivo que buscas
- "-exec", que tiene que ejecutar lo que venga después
- "cp", aquí podría ponerse el comando que quieras, *mv*, *rm*...
- "~/Documentos \;" el lugar donde se vana mover o copiar los archivos

Veamos otro ejemplo:

    find . -type f -iname '9rsgikqrj1g61.jpg' -exec cp {} ~/Documentos \;

Este comando busca el archivo *9rsgikqrj1g61.jpg* y una vez lo encuentra lo copia a la carpeta *Documentos*.

Salu2

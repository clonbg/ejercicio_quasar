# Comandos de git que yo utilizo
#### 04/04/2020

No soy un gran especialista en *git*, de hecho con unos pocos comandos hago todo lo que necesito. Rara es la vez que he necesitado hacer en *fetch* o algo similar.

- Crear un repositorio nuevo

        git init

- Add & commit

        git add nombreArchivo
        git commit -m "mensaje"

- La primera vez hay que indicarle cual es su repositorio

        git remote add origin https://github.com/nombreRepo
        git push -u origin master

- Enviar los cambios si no es la primera vez

        git push origin master

- Actualizar y fusionar

        git pull

- Si *git pull* falla porque se modificó algún archivo del repositorio y posteriormente se quiso actualizar, la solución es descartar todos esos cambios si estos no son necesarios

        git stash save --keep-index
        git stash drop
        git pull

Salu2

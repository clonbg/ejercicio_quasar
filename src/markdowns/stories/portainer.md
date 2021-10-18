# **Portainer**, magnífico gestor para **Docker**
#### 07/11/2020

Cuando pruebas *docker* una vez, te engancha por su facilidad y porque, al estar separado en *contenedores* no puede corromper tu sistema. Después de cierto tiempo tienes decenas de contenedores funcionando y es ahí cuando un gestor para *docker* se vuelve necesario. Para esto tenemos a [Portainer](https://www.portainer.io), es **open-source** y nos ayudará a eliminar, actualizar, etc...

Portainer es un servicio web y se instala con *docker*, como no! Con este comando lo tendrás funcionando:

	$ docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
	
Que es lo que hace este comando?:

- corre el servicio como un *demonio*
- se reinicia siempre que sea necesario
- y crea un volumen en tu sistema *portainer_data* para que los datos persistan al actualizar el *docker*

Para acceder [http://localhost:9000](http://localhost:9000/)

Te pedirá crear usuario y contraseña, después te pregunta si lo quieres para gestionar un servidor remoto o en modo local, en mi caso esto último y ya puedes entrar y empezar a gestionar. Para más información sobre su funcionamiento [portainer.io](https://documentation.portainer.io/) pero ya os digo que es muy intuitivo.

Para actualizarlo..., el siguiente post hablará sobre eso.

Salu2

# Mi propio servidor **Git** gracias a **Docker**

#### 03/01/2023

Antes de nada, decir que tener mi propio servidor de **Git** instalado en mi equipo puede no ser una buena idea, ya que tienes que ocuparte tu mismo de los backups y mantenerlo, ya que no se encuentra en ningún otro sitio. A parte de esto todo son beneficios, sobre todo para no depender de servicios de terceros.

Buscando un servicio fácil de instalar y claro, si puede ser con **docker**, dí con [Gogs](https://gogs.io/)![Gogs](https://clonbg.netlify.app/gogs-docker/gogs.png)
Como indica en la página de [Github](https://github.com/gogs/gogs/tree/main/docker) con unos sencillos pasos lo tendrás funcionando:

```
# Pull image from Docker Hub.
$ docker pull gogs/gogs

# Create local directory for volume.
$ mkdir -p /var/gogs

# Use `docker run` for the first time.
$ docker run --name=gogs -p 10022:22 -p 10880:3000 -v /var/gogs:/data gogs/gogs

# Use `docker start` if you have stopped it.
$ docker start gogs
```

Ahora ya puedes acceder desde [localhost](http://localhost:10880) y crear tu usuario y empezar a usarlo.

Salu2

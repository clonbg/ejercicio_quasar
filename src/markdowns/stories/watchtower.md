# Mantener actualizados los contenedores *Docker* con **Watchtower**
#### 22/11/2020

Como os dije en la antrada anterior os voy a enseñar una herramienta que mantiene los contenedores *docker* actualizados. Esto se hace con otro contenedor, este de [aquí](https://github.com/containrrr/watchtower).

Para descargarlo y ponerlo en funcionamiento:

```
docker run -d \
    --name watchtower \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower
```

A partir de ese momento se encargará de mantenerlos actualizados a la última versión, yo tengo por ejemplo un contenedor de [LinuxServer](https://www.linuxserver.io/) *linuxserver/freshrss:latest* y cada vez que sale una nueva versión se actualiza sin interacción con el usuario. Tengo otro de *mongoDb* bloqueado en la versión *4.4*, *mongo:4.4*, este evidentemente no se actualizará. Sólo tienes que mantener el contenedor de **Watchtower** funcionando, a partir de ese momento te puedes despreocupar.

Salu2

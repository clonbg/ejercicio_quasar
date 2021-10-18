# Usar **docker** con tu usuario sin *sudo*
#### 26/04/2021

El como usar **docker** sin *sudo* es posiblemente una de las cosas que más veces he buscado en internet, nunca recuerdo como se hace. Por eso voy a ponerlo aquí para poder consultarlo tantas veces como sea necesario (hasta que lo recuerde).

La solución es muy sencilla, basta con añadir al grupo *docker* a tu usuario. Lo podemos hacer con tres lineas de terminal:

    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker

Y ya está, ya no será necesario tener privilegios para usar **docker**.

Visto en [atareao.es](https://atareao.es/tutorial/traefik/instalacion-de-traefik/)

Salu2

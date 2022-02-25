# Consumo alto cuando la Raspberry Pi trabaja desde un SSD
#### 25/02/2022

Desde hace un tiempo tengo la **Raspberry Pi 4 B** como servidor personal, con un montón de servicios: notas, calendario, vscode, etc...

Seguí un tutorial para que arrancara desde un dispositivo **SSD**, porque según dicen tiene un mejor funcionamiento, esto es cierto. Lo que noté es que el led de la tarjeta *microSD* no paraba de parpadear buscando todo el tiempo si estaba dentro. Leyendo por ahí comentaban que se podía bajar la carga del procesador hasta en un 10% eliminando esto. Encontre la solución para que solo lo haga una vez, al inicio del sistema, en [jamesachambers.com](https://jamesachambers.com/raspberry-pi-cheap-ssd-upgrade-30/). Es muy sencillo, sólo hay que editar el archivo ```/boot/config.txt``` y añadir la siguiente linea:
```
dtparam=sd_poll_once
```
Después de esto, reiniciar. Con esta línea comprueba al inicio si hay tarjeta *microSD*, si hay intenta iniciar desde ella, si no, arranca desde el *SSD*

Salu2

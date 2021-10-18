# *Script* para avisar de la carga de la batería
#### 01/06/2020

Este fin de semana he instalado **ArchLinux** con el escritorio **MATE**, todo con ayuda de [ArcoLinux](https://arcolinux.com/). Me he encontrado con que el *gestor de energía* no me lanzaba avisos, ni cuando la batería estaba casi llena ni cuando estaba prácticamente vacía, así que decidí buscar un método.

Encontré un script en [slimbook.es](https://slimbook.es/tutoriales/linux/45-script-linux-para-avisar-de-batearia-cargada) pero no funcionaba correctamente. Lo que ocurría es que el comando *notify-send* no se lanzaba, pero encontré la solución. Primero vamos a ejecutar el comando:

    id -a

Nos da algo como esto de salida, tenemos que quedarnos con el número donde pone *uid* seguido de nuestro nombre de usuario, es el *id* de usuario

![uid](https://clonbg.netlify.app/script-aviso-bateria/uid.png   "uid usuario")

Este es el script:

```
#!bin/bash
#
# -*- ENCODING: UTF-8 -*-
# Este programa es software libre. Puede redistribuirlo y/o
# modificarlo bajo los términos de la Licencia Pública General
# de GNU según es publicada por la Free Software Foundation,
# bien de la versión 2 de dicha Licencia o bien (según su
# elección) de cualquier versión posterior.
#
# Si usted hace alguna modificación en esta aplicación,
# deberá siempre mencionar al autor original de la misma.
#
# DesdeLinux.net CC-BY-SA 2015
# Autor: ELAV
BATLVL=$(cat /sys/class/power_supply/BAT1/capacity)
if [ $BATLVL -ge 95 ]; then
    if [ ! -a /tmp/batwarn ]; then
        #Esta es la línea que hay que modificar
        sudo -u clonbg DISPLAY=:0 DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus notify-send --urgency=critical --expire-time=5000 --app-name=Bateria --icon=battery "Notificación de Batería" "Desconecta el cargador por favor" ;
        touch /tmp/batwarn ;
    fi
elif [ $BATLVL -le 15 ]; then
    if [ ! -a /tmp/batwarn ]; then
        #Esta es la línea que hay que modificar
        sudo -u clonbg DISPLAY=:0 DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus notify-send --urgency=critical --expire-time=5000 --app-name=Bateria --icon=battery "Notificación de Batería" "Conecta el cargador por favor"
        touch /tmp/batwarn ;
    fi
else
    if [ -a /tmp/batwarn ]; then
        rm -f /tmp/batwarn ;
    fi
fi
```
También lo tenéis [aquí](https://github.com/clonbg/MisScripts/blob/master/bateria.sh) para descargar. No olvides darle permisos de ejecución:

    sudo chmod a+x bateria.sh

Las dos líneas que hay que modificar son las que empiezan por:

    sudo -u clonbg DISPLAY=:0 DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus notify-send....

donde **clonbg** es mi nombre de usuario y **1000** es mi *uid*. Cámbialo por los tuyos.

Ahora lo que hay que hacer es que se ejecute continuamente. He instalado *cronie*

    yay cronie

He ejecutado:

    sudo crontab -e

Y he añadido esta línea con la ruta de mi script:
<pre>
*/5 * * * * /bin/sh /home/clonbg/Git/Scripts/MisScripts/bateria.sh
</pre>

Con esto hacemos que se ejecute cada cinco minutos, y...

![uid](https://clonbg.netlify.app/script-aviso-bateria/bateria_sh.png   "resultado")

Salu2

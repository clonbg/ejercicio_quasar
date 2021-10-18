# Comprobar actualizaciones en **Debian**
#### 22/05/2021

Cada vez que enciendo el ordenador, por costumbre, actualizo el sistema. Es una costumbre adquirida cuando he usado Arch Linux (todavía lo tengo en otros equipos), ya que este cada poquito tiempo tenía actualizaciones. Ahora he decidido pasarme a **Debian estable**, la versión 10 llamada **Buster** y buscar actualizaciones se hace innecesario ya que las versiones estables salen muy poco a poco. Por este motivo he decidido crear un *script en bash* que busque actualizaciones y me avise en el caso de que encuentre alguna.

Como dependencias hay que instalar dos paquetes

    sudo apt install libnotify-bin mplayer -y

El script es este:

```
#!/bin/sh

passwd='password'

echo $passwd | sudo -S /usr/bin/apt-get update -y

actualizaciones=$(echo $passwd | sudo -S /usr/bin/apt-get -s -q -u upgrade | grep -v '\.\.\.' | grep -v ':' | grep -v 'Inst ' | grep -v 'Conf ')

XDG_RUNTIME_DIR=/run/user/$(id -u) notify-send 'Se encuentran disponibles las siguientes actualizaciones: ' "$actualizaciones"


if [ "$actualizaciones" != "0 actualizados, 0 nuevos se instalarán, 0 para eliminar y 0 no actualizados." ]; then
    export XDG_RUNTIME_DIR="/run/user/1000"
    mplayer -really-quiet /home/clonbg/Programas/campana.mp3
fi
```

Los cambios que tienes que hacer son:

- Por supuesto cambiar la contraseña *password* por tu contraseña de *sudo*
- Cambiar la ruta del archivo *campana.mp3* que suena cuando hay actualizaciones. Descargado de [sonidosmp3gratis.com](http://sonidosmp3gratis.com/campana).

Por último hay que añadir la tarea a *cron*:

    crontab -e

Y añadir la siguiente línea al final:

	0 * * * * /home/clonbg/Programas/update.sh

Cambiando la ruta por donde tengas tú el script, se ejecutará cada hora en punto.



Salu2

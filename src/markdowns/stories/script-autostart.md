# Script en **bash** que comprueba si hay internet y ejecuta unos programas
#### 19/09/2021

Al arrancar mi sistema operativo y estar en un sitio sin conexión a internet algunos programas se ejecutaban igualmente dando lugar a fallos, evidentemente. Me decidí a crear un *script* que compruebe si hay conexión a internet y ejecutar dichos programas, además cuando no hay conexión los *mata*.

Este es el esquema:

![esquema](https://clonbg.netlify.app/script-autostart/esquema-script.png) 

y aquí está el *script*:

```
#!/bin/bash
sleep 20
termina=true
while [ true ]; do
    echo 'funcionando loop'
    if ping -c1 google.com &>/dev/null; then
        echo "tienes conexión"
        if [ $termina = true ]; then
            echo «Ejecutando»
            programa1 &
            programa2 &
            termina=false
        elif [ $termina = false ]; then
            echo "Ya no hace falta"
        fi
    else
        killall programa1 &
        killall programa2 &
        echo «no tienes conexion»
        termina=true
    fi
    sleep 600
done
```

Lo puedes modificar según tus necesidades. Yo, por ejemplo monto una unidad en red y uso [kalu](https://jjacky.com/kalu/).

Salu2

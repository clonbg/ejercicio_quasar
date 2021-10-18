# Ejecutar un script al iniciar la Raspberry Pi

#### 21/06/2020

Vamos a crear un servicio con _systemd_ que se ejecute cada vez que se inicie la **Raspberry Pi**. En mi caso tengo instalado [dietpi](https://dietpi.com/), pero cualquier derivado de **Debian** valdría, como por ejemplo [raspbian](https://www.raspbian.org/).

Lo primero creamos un archivo _.service_ en _/lib/systemd/system/_

    sudo nano /lib/systemd/system/twitter.service

y pegamos el siguiente código dentro del archivo

```
[Unit]
Description=Mi Servicio para twitter
After=multi-user.target

[Service]
Type=idle
ExecStart=/usr/bin/python3.7 /home/dietpi/twitter-python/programa.py

[Install]
WantedBy=multi-user.target
```

En _ExecStart_ podemos poner cualquier comando que pudieramos necesitar.
Otorgamos los permisos necesarios al archivo:

    sudo chmod 644 /lib/systemd/system/twitter.service

Y ahora para que se ejecute al inicio:

    sudo systemctl daemon-reload
    sudo systemctl enable twitter

Para saber el estado del servicio y si está funcionando bien:

    sudo systemctl status twitter.service

![status](https://clonbg.netlify.app/crear-servicio/status.png "Status")

Visto en [chips.mecatronium.com](https://chips.mecatronium.com/tutorial-como-correr-un-script-de-python-al-iniciar-el-raspberry-pi/)

Salu2

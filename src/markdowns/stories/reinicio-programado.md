# Programar el reinicio del ordenador de forma automática mediante **Cron**
#### 05/01/2021

Últimamente he tenido bastantes problemas de conexión de la *Raspberry Pi*, cuando pasaban 2 ó 3 días sin reiniciarla (lo cual es algo habitual), a veces se bloqueaba y no podía acceder vía **ssh**, con lo que no podía reiniciarla hasta llegar a casa.
Como hay ciertas horas, de madrugada, que la *Pi* no se utiliza, he decido que se reinicie todos los días a una determinada hora. Para esto la mejor solución es **Cron**.

Lo primero es abrir un terminal y escribir:

    sudo crontab -e

Una vez añadido hay que añadirle una línea con la siguiente estructura:

    min hor dom mon dow comando

 - min: minuto en el que se va a ejecutar el comando, de 0 a 59
 - hor: hora en la que se va a ejecutar el comando, de 0 a 23
 - dom: día del mes en el que se va a ejecutar el comando, de 1 a 31. Si queremos que se ejecute todos los días hay que cambiarlo por un *
 - mon: mes en el que se va a ejecutar el comando, de 1 a 12. Si queremos que se ejecute todos los meses hay que cambiarlo por un *
 - dow: día de la semana que se va a ejecutar el comando, de 0 a 6. Si pones un 0 el domingo, y si pones un 6 el sábado. Si queremos que se ejecute todos los días hay que cambiarlo por un *
 - comando: el comando que se ejecuta, en nuestro caso `/sbin/reboot -h now`

Para que se reinicie todos los días a las 4:00 quedaría así:


![Crontab](https://clonbg.netlify.app/reinicio-programado/crontab.png)Una vez guardados los cambios, hay que reiniciar el servicio:

    sudo service cron restart

Ya hemos terminado, no era tan difícil!!?!

Visto en [https://geekland.eu](https://geekland.eu/programar-el-apagado-del-ordenador/)

Salu2
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjU5NzAzNjUsNTY0NTA2NjM1LDE3MzYzNz
U3NTcsLTUxMDk5NzgxNSwtNDIzNjkwODldfQ==
-->
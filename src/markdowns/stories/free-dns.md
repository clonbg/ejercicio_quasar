# Conectarnos desde fuera de la red con free-dns
#### 03/05/2020

*Free-dns* es un servicio gratuito con el que nos podremos conectar a nuestro ordenador desde fuera de la red. Lo uso para conectarme a una *Rasperry Pi 4* que tengo en casa y le he instalado bastantes servicios.

- Paso 1

Crear una cuenta en [freeDNS](https://freedns.afraid.org/signup/?plan=starter)

- Paso 2

En el menú de la izquierda pinchar en *subdomains* > *Add* para crear uno nuevo

![subdominio](https://clonbg.netlify.app/free-dns/subdomain.png   "Añadiendo un subdominio")

De esta manera la dirección sería [http://lecheDeVaca.mooo.com](http://lecheDeVaca.mooo.com), en *Destination* tienes que poner tu IP pública

- Paso 3

En el menú *DynamicDNS*, abajo veremos los dominios creados. Hacemos botón derecho en *Direct URL*, pinchamos en *copiar enlace*, nos tendremos que quedar con lo que hay detrás de *"?"* . Será algo como [https://freedns.afraid.org/dynamic/update.php?bmdMVTVo.....](https://freedns.afraid.org/dynamic/update.php?bmdMV....)

- Paso 4

Abrimos una terminal y creamos un script en *Cron*

	sudo nano /etc/cron.d/free-dns.sh

copiamos este contenido:

```
#!/bin/sh
# freedns_update.sh: Update the public IP on freedns.afraid.org only if it has changed.
## Place this script in the cron's job directory /etc/cron.d and assign the proper permissions
## and owner
## sudo chmod 500 /etc/cron.d/freedns_update.sh
## sudo chown root:root /etc/cron.d/freedns_update.sh
## Add to /etc/crontab to execute on reboot and every 5 minutes
## Edit /etc/crontab and append these two lines:
## @reboot root /etc/cron.d/freedns_update.sh >/dev/null
## */5 * * * * root /etc/cron.d/freedns_update.sh >/dev/null

#Use your own values
DOMAIN=raspberry.liar.info.tm
HASHKEY=c29Q2s1Ml9df604bba2b1359ff62MTEyMT185e7=

UPDATE_URL="http://freedns.afraid.org/dynamic/update.php?${HASHKEY}"

current_ip=$(wget -q --output-document - http://checkip.dyndns.org | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}')
registered_ip=$(ping -qn -c 1 $DOMAIN | head -n 1 | grep -o '[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}')

if [ "${current_ip}" != "${registered_ip}" ]; then  
   wget -q --read-timeout=0.0 --waitretry=5 --tries=400 --output-document /dev/null $UPDATE_URL
   if [ $? -eq 0 ]; then
     echo "$(date +"%b %_d %T") $(hostname) $0: IP address updated on freedns.afraid.org: new IP '${current_ip}', old IP '${registered_ip}'" >> /var/log/messages
   else    
     echo "$(date +"%b %_d %T") $(hostname) $0: ERROR IP address could not be  updated on freedns.afraid.org: current IP '${current_ip}', registered IP '${registered_ip}'" >> /var/log/messages
   fi
fi
```

Tenemos que cambiar:

	DOMAIN=lecheDeVaca.mooo.com
	HASKEY=Por lo que hay despues de *"?"* en *Direct URL*

Damos permisos de ejecución al archivo

	sudo chmod 555 /etc/cron.d/free-dns.sh

- Paso 5

Hay que programar la tarea, para eso:

	sudo nano /etc/crontab

Al final del archivo añadimos

	@reboot		root	/etc/cron.d/free-dns.sh>/dev/null
	*/5 * * * *	root	/etc/cron.d/free-dns.sh>/dev/null
	
Es muy importante abrir los puertos *80* y *443* en el router para que se conecte fuera la tarea y para que vuelva la información.

Ahora ejecutamos

	sudo /etc/init.d/cron restart

Se debe actualizar nuestra *IP* al ejecutarlo

Visto en [fororaspberry.es](https://www.fororaspberry.es/viewtopic.php?t=8077)

Salu2

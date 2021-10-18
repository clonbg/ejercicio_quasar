# Instalar **Zram Swap** en *Arch Linux*
#### 23/07/2021

Primero hay que explicar que es esto y para que sirve. **Zram**.

>   Según [Wikipedia](https://es.wikipedia.org/wiki/Zram) **Zram** es un módulo del núcleo Linux previamente llamado compcache. **Zram** incrementa el rendimiento evitando la paginación en disco y en su lugar utiliza un dispositivo de bloques comprimidos en la memoria **RAM** donde la paginación toma lugar hasta que sea necesaria la utilización del espacio compartido (**Swap**) en el disco duro.

Dejando a un lado tecnicismos es muy útil cuando tienes 4GB o menos de **RAM** en tu equipo haciendo que vaya más fluido cuando hay un consumo alto de memoría.

Veamos como instalarlo en *Arch Linux*:

    sudo pacman -S systemd-swap
 
El archivo de configuración se encuentra en ``` /etc/systemd/swap.conf ``` y este es el mio:

```
zram_enabled=1
zram_size=$(($RAM_SIZE/4))
zram_streams=$NCPU
zram_alg=lz4
zram_prio=200
```

Esto usaría como **Zram** un cuarto de la **RAM** del equipo y crearía una unidad de **Zram** por cada nucleo del procesador lo cual es muy recomendable.

Lo siguiente es reiniciar el servicio:

	sudo systemctl restart systemd-swap

Visto en [https://juncotic.com](https://juncotic.com/zram-swap-memoria-de-intercambio-comprimida-en-la-ram/)

Salu2

# Grabar una *iso* en un Usb desde la terminal con **dd**
#### 10/01/2022

Desde mi experiencia, la mejor manera de grabar una imagen *iso* en un Usb es desde la terminal, con el comando **dd**. Es muy útil para no tener que quemar un DVD o un CD.

El primer paso es saber el destino que ocupa el Usb, con el comando:

```
sudo fdisk -l
```

![fdisk](https://clonbg.netlify.app/grabar-dd/fdisk.png)

Como se puede ver la dirección de mi Usb es */dev/sda*.

Ahora hay dos maneras de grabar el Usb:

- Con la uitlería *pv*:

```
sudo dd if=/ruta/al/archivo/iso |pv|sudo dd of=/dev/sda bs=1M
```

- o bien:

```
sudo dd bs=4M if=/ruta/al/archivo/iso of=/dev/sda status=progress && sync
```

Hay que tener mucho cuidado de no equivocarse con la dirección del Usb porque es donde se va a grabar.

Visto en [slimbook](https://slimbook.es/tutoriales/linux/330-dd-o-como-quemar-o-grabar-iso-de-sistemas-operativos-en-un-usb-sin-programas)

Salu2

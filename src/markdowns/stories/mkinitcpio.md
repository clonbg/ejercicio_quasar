# Possibly missing firmware for module: aic94xx, wd719x
#### 29/03/2020

Soy usuario de Gnu/Linux en todos mis equipos, en todos en los que es posible. En mi sobremesa cada vez que compilaba el kernel o ejecutaba

    mkinitcpio -p linux

me daba un error, bueno, más bien dos:

    Possibly missing firmware for module: aic94xx
    Possibly missing firmware for module: wd719x

La compilación acababa perfectamente y tampoco había notado nada especial en el equipo. Ya sabemos como somos algunos informáticos, estuve buscando una solución por todas partes, durante meses. Hasta que la encontré en uno de los innumerables foros de Github. Se solucionaba bajando el código fuente de cada driver y compilándolo, facil.

    git clone https://aur.archlinux.org/aic94xx-firmware.git
    cd aic94xx-firmware
    makepkg -sri

    git clone https://aur.archlinux.org/wd719x-firmware.git
    cd wd719x-firmware
    makepkg -sri



Visto en [Github](https://gist.github.com/imrvelj/c65cd5ca7f5505a65e59204f5a3f7a6d)

Salu2
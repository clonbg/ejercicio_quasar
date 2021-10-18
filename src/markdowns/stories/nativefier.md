# Crea tus propias aplicaciones web con **Nativefier**
#### 27/09/2020

Esta es una maravillosa utilidad que convierte en aplicación *electrón* una dirección web. De esta manera puedes tener una aplicación de escritorio con: WhatsApp, Telegram, Twitter, etc. Aquí tienes su [*GitHub*](https://github.com/jiahaog/nativefier), está todo muy bien explicado.

El primer paso es instalarla:

    sudo npm i -g nativefier

Después me he creado una carpeta llamada **Nativefier** para descargar ahí las aplicaciones. Entramos en ella:

    cd Nativefier

Ahora tenemos que saber la dirección web que queremos convertir, por ejemplo la de [*Telegram*](https://web.telegram.org/), y la creamos:

    nativefier https://web.telegram.org/
![imagen](https://clonbg.netlify.app/nativefier/nativefier2.png)

Se ha creado una carpeta llamada *TelegramWeb-linux-x64*, con el ejecutable *TelegramWeb*. Para poder ejecutarlo en cualquier parte de nuestro sistema creamos un enlace simbólico al ejecutable hasta nuestro **$PATH**:

	sudo ln -s ~/Nativefier/TelegramWeb-linux-x64/TelegramWeb /usr/bin/

lo ejecutamos y listo:

	TelegramWeb

Salu2
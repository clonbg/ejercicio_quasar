# **Alacritty**, la terminal más rápida

#### 17/05/2020

**Alacritty** es un simple emulador de terminal, no es más. Eso si, es súper rápido. Lo había escuchado en el podcast de [atareao.es](https://www.atareao.es/software/utilidades/emulador-de-terminal-mas-rapido/) y decidí hacer la prueba yo mismo, una de las cosas que más me gustan es hacer lo mismo en menos tiempo.

Creé un archivo en el fondo de mi sistema con el nombre _archivoprueba_ y hice una búsqueda con el comando _find_.

**Primero en la terminal de Xfce4:**

![Tiempo en la terminal de Xfce4](https://clonbg.netlify.app/alacritty-la-terminal-mas-rapida/timeTerminal.png "Tiempo en la terminal de Xfce4")
Tarda 41 segundos

**Con Alacritty:**

![Tiempo en Alacritty](https://clonbg.netlify.app/alacritty-la-terminal-mas-rapida/timeAlacritty.png "Tiempo en Alacritty")
Tarda 16 segundos!!

Estamos hablando, en este caso de casi el triple de rápido que una terminal convencional. Me veo obligado a cambiarme a **Alacritty** como mi emulador de terminal.

El archivo de configuración se encuentra en:

    ~/.config/alacritty/alacritty.yml

[Aquí](https://github.com/clonbg/configs/blob/master/alacritty.yml) os dejo mi archivo de configuración, además he instalado la fuente _nerd-font-hack_ que es la que viene por defecto.

Ahora solo falta que me vaya familiarizando con _tmux_ para tener varios terminales a la vez, pero eso ya os lo cuento otro día.

Salu2

# **Tmux**, sácale más partido a la terminal
#### 21/05/2020

Os dije en el post dedicado a *Alacritty* que os iba a hablar de **Tmux**, pues lo prometido es deuda, vamos allá:

**Tmux** según pone en su descripción es un multiplexor de terminal. Esto significa que puedes tener cuantas terminales quieras dentro de una.

He estado trasteando un poco con él, siguiendo los atajos de teclado que indican en esta página, [tmuxcheatsheet.com](http://tmuxcheatsheet.com)

Puedes hacer prácticamente de todo, abrir sesiones y dejarlas funcionando en segundo plano después de cerrar la terminal es una de las más interesantes. Os recomiendo que echéis un ojo e intenteis dominarlo.

Yo soy más vago, me he creado dos alias en mi archivo *.zshrc*, uno para dividir *alacritty* en tres partes y otro para cerrar la sesión:

    alias tmuxAll="tmux new-session \; split-window -h \; split-window -v \; attach"
    alias tmuxClose="tmux kill-ses -t 0"

De esta manera al escribir *tmuxAll* puedes trabajar con 3 terminales a la vez:

![tmuxAll](https://clonbg.netlify.app/tmux-sacale-mas-partido/tmux.png   "TmuxAll")

y al escribir *tmuxClose* cierra todas las terminales:

![tmuxClose](https://clonbg.netlify.app/tmux-sacale-mas-partido/tmuxClose.png   "TmuxClose")

Salu2

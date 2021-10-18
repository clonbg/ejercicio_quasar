# Activar el *scroll* en **Tmux**
#### 31/05/2020

Algo muy sencillo que me ha traído de cabeza ha sido activar el *scroll* en **tmux**. Me hacía falta porque en **Linux** es fundamental leer lo que pasa en la terminal, además cuando intentas ir hacia arriba van saliendo los últimos comandos, como cuando le das al botón de *flecha arriba* de nuestro teclado.

![VueJs](https://clonbg.netlify.app/vuex-nuxt-example/vuex.png)

Solo hay que crear un archivo de configuración de *tmux* y añadirle la opción, esto se puede hacer con tan solo una linea en nuestra terminal:

    "set -g mouse on" >> ~/.tmux.conf

Después de esto tienes que volver a abrir *tmux* y ya lo tienes

Visto en [https://superuser.com](https://superuser.com/questions/209437/how-do-i-scroll-in-tmux)

Salu2

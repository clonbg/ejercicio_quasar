# Como separar un proceso de la terminal con **disown**
#### 26/03/2021

Según la [Wikipedia](https://en.wikipedia.org/wiki/Disown_(Unix)) en los shells **Unix** *ksh*, *bash*, *fish* y *zsh*, el comando incorporado **disown** se utiliza para eliminar trabajos de la tabla de trabajos, o para marcar trabajos de manera que no se les envíe una señal *SIGHUP* si el *shell* padre la recibe (por ejemplo, si el usuario cierra la sesión).

Esto quiere decir que puede deshacer la asociación de un proceso con la terminal.

Veamos como se usa, si por ejemplo abrimos *chromium* desde la terminal:

![Chromium](https://clonbg.netlify.app/disown/disown2.png)

Cuando cerramos la terminal se cierra *chromium* también. Sin embargo, cuando usamos **disown** podemos cerrar la terminal que el proceso pasa a estar a cargo del nucleo del sistema:

![Chromium-disown](https://clonbg.netlify.app/disown/disown3.png)

Incluso nos muestra el *PID* del proceso. Sabiendo eso también podemos *matarlo* desde la terminal con el comando:

```
kill -9 16821
```

Salu2

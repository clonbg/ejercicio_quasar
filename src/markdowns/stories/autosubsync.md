# Sincronizar automáticamente subtítulos utilizando el aprendizaje automático con **autosubsync**

#### 15/02/2021

Muchas veces cuando tienes que sincronizar un subtítulo, bien por que es para otra versión del video o por el motivo que sea, tenemos que sincronizarlo a mano, lo cual es bastante costoso. Hay una aplicación de terminal que lo hace sola y en una sola línea, **autosubsync**, es *software libre* y está alojada en *[Github](https://github.com/oseiskar/autosubsync)*.

Para instalarla en nuestro **sistema operativo** (Linux), lo primero hay que instalar otra aplicación de la que depende, **ffmpeg**:

```
sudo apt install ffmpeg
```

Y después instalar la aplicación propiamente dicha:

```
sudo pip install autosubsync
```

Si esto no os funciona puede que necesitéis instalar el administrador de paquetes de *python,* **[pip](https://pypi.org/project/pip/)**, que es el lenguaje en el que está escrita la librería.

Una vez en nuestro equipo, el uso de *autosubsync* es muy sencillo:

```
autosubsync plan-9-from-outer-space.avi \   # El video
  plan-9-out-of-sync-subs.srt \             # El subtítulo que tenemos
  plan-9-subtitles-synced.srt               # El subtítulo que obtenemos
```

Con esto ya puedes tener todos tus subtítulos sincronizados

Salu2
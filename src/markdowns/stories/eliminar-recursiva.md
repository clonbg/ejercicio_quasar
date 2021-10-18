# Eliminar archivos de forma recursiva

#### 05/03/2021

Vamos a probar a eliminar archivos de forma recursiva desde nuestra terminal, y así, no tener que ir buscando por carpetas dichos archivos.

Vamos a poner el ejemplo que tenemos un entramado de carpetas con archivos con extensión *json*. Lo primero deberiamos listarlos, sólo por seguridad, para ver que vamos a borrar:

```
find ~/carpeta/prueba -name "*.json" -type f
```

![eliminar-recursiva.png](https://clonbg.netlify.app/eliminar-recursiva/eliminar-recursiva.png)


Ahora solo hay que añadir *-delete* al final del comando y las borrará todas de forma recursiva:

```
find ~/carpeta/prueba -name "*.json" -type f -delete
```

Visto en [https://geekytheory.com](https://geekytheory.com/tip-linux-eliminar-archivos-de-forma-recursiva-por-extension)

Salu2

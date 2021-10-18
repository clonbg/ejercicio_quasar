# Actualización automática de contenedores con **Ouroboros**
#### 13/04/2021

La actuaización automática de contenedores te puede evitar mucho tiempo, por no hablar de los agujeros de seguridad de versiones antiguas. Además este método te mantiene informado de la manera que quieras, yo lo tengo configurado para que me mande un mensaje a *Telegram* cada vez que hace una actualización.
El nombre de este servicio viene del griego, es el signo de una serpiente que se muerde la cola formando un círculo y que le da un significado de movimiento continuo.
Veamos como funciona.

**Ouroboros** incluye [*Apprise*](https://github.com/caronc/apprise) en su código, el cual es un sistema de mensajería que incluye muchísimos servicios. Yo he elegido *Telegram* por su sencillez y comodidad.
Lo primero es crear un @Bot de *Telegram* con el método que nos indica [danielmartingonzalez.com](https://www.danielmartingonzalez.com/es/notificaciones-de-home-assistant-en-telegram/#bots-en-telegram). Una vez tengas el *API Token* y el *Chat ID* podriamos levantar un contenedor de la siguiente forma:

```
docker run -d --name=Ouroboros --hostname=ouroboros --network=host --restart=always -v /var/run/docker.sock:/var/run/docker.sock -e CLEANUP=true -e TZ='Europe/Madrid' -e INTERVAL=1200 -e NOTIFIERS="tgram://API_Token/Chat_ID/" pyouroboros/ouroboros:latest
```
Esto creará una instancia que se mantendrá en funcionamiento y cada 1200 segundos (20 minutos) vigilará si hay alguna actualización posible. Cuando haya actualizado un contenedor te mandará un mensaje a *Telegram* de este tipo:

![VueJs](https://clonbg.netlify.app/ouroboros/telegram.png)

Tiene un par de extras:
- Puedes decirle que contenedores quieres que no sean monitorizados añadiendo ```-e IGNORE="contenedor1 contenedor2..."```
- Elimina las imagenes anteriores para que no te ocupen espacio.

Visto en [www.danielmartingonzalez.com](https://www.danielmartingonzalez.com/es/actualizacion-automatica-de-contenedores/)

Salu2

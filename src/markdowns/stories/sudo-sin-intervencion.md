# Usar **sudo** sin intervención del usuario
#### 17/12/2020

Ultimamente he necesitado ejecutar unos *scripts* y era un problema tener que escribir la contraseña de **sudo** cada vez que se ejecutaba. He buscado una solución en la que no haya que poner el comando en el archivo *sudoers*.

Se puede poner la contraseña directamente en el *script* gracias a [**stdin**](https://es.wikipedia.org/wiki/Entrada_est%C3%A1ndar)

La línea es asi:

    printf 'password' | sudo -S comando

Esto, evidentemente tiene problemas de seguridad ya que se guarda la contraseña en texto plano dentro del *script*. Úsalo con cuidado!

Visto en [https://unix.stackexchange.com](https://unix.stackexchange.com/questions/19707/why-cant-sudo-redirect-stdout-to-etc-file-but-sudo-nano-or-cp-can)

Salu2

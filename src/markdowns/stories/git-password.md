# Hacer que git no pida contraseña
#### 11/04/2020

Se hace muy pesado, cada vez que hacemos un *push* tener que andar introduciendo las credenciales de *git*. Hay dos maneras de hacer que esto no sea necesario, una permanente y otra temporal:

- De manera permanente:

Hay que establecer un asistente de credenciales en la configuración de *git*

    git config --global credential.helper store

De esta manera guardará los datos en el fichero *./git-credentials*

- De manera temporal:

Se puede usar el mismo asistente de manera temporal

    git config --global credentials.helper 'cache --timeout=3600'

Después de pasados los *3600* segundos (1 hora) volverá a pedir usuario y contraseña.

Encontrado en [blog.openalfa.com](https://blog.openalfa.com)

Salu2
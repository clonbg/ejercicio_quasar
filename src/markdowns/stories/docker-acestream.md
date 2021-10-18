# Como ver contenido **acestream** en **Linux**
#### 24/01/2021

Voy a explicar como veo yo contenido **acestream** en **Linux**. No voy a entrar en que contenidos son legítimos ver y que no, **cada uno es responsable de usarlo en consecuencia**. Al tema:

Yo uso un contenedor docker que puedes encontrar en [Github](https://github.com/JackLiar/docker-acestream). Lo primero que hay que hacer es clonar el repositorio:

    git clone https://github.com/JackLiar/docker-acestream

Lo segundo es entrar en la carpeta que se ha creado llamada *docker-acestream* y crear el contenedor, esto sólo lo tienes que hacer la primera vez:

    cd docker-acestream
    ./build.sh

Después para dejar corriendo el servidor en la terminal:

    ./run.sh

Por último en otra terminal hay lanzar el video:

    ./playstream.py \
	    --content-id CONTENT_ID \
	    --player /usr/bin/vlc \

**CONTENT_ID** es la parte de letras y números que va después de **acestream://**, por ejemplo de esta dirección **acestream://9c5df497e3ed5853b7411d1197ab86141b4a501c** el **CONTENT_ID** es **9c5df497e3ed5853b7411d1197ab86141b4a501c**


Salu2

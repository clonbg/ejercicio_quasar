# Mi propio calendario y mi libreta de contactos con *Radicale*
#### 16/08/2020

Os contaba en el anterior post la adquisición de mi nuevo terminal y de la "necesidad" de alejarme de **Google**. Dos herramientas muy importantes para mi vinculadas a *la gran G* eran el calendario y los contactos.

Lo he solucionado instalando [**Radicale**](https://radicale.org/3.0.html) en la Raspberry Pi 4 que tengo en casa como servidor.

Las aplicaciones del lado del cliente que uso son **DAV<sub>x<sup>5</sup></sub>** en Android, y en linux uso **Thunderbird**.

Para instalarlo:

	sudo apt install radicale python3-radicale
	
La forma de autenticarse de manera segura es usando *htpasswd*, con este comando te crea el archivo *users*, el cual yo he guardado junto al de configuración en ```/etc/radicale/users```, y te pide la contraseña para el usuario:

	htpasswd -c /etc/radicale/users usuario

El archivo de configuración ```/etc/radicale/config``` tiene que tener esta configuración:

![auth](https://clonbg.netlify.app/radicale/radicale_auth.png	"Auth")

Aquí os dejo el mio para que podáis echarle un vistazo:

```
# -*- mode: conf -*-
# vim:ft=cfg

# Config file for Radicale - A simple calendar server
#
# Place it into /etc/radicale/config (global)
# or ~/.config/radicale/config (user)
#
# The current values are the default ones


[server]

# CalDAV server hostnames separated by a comma
# IPv4 syntax: address:port
# IPv6 syntax: [address]:port
# For example: 0.0.0.0:9999, [::]:9999
hosts = 192.168.1.97:5232

# Daemon flag
#daemon = False

# File storing the PID in daemon mode
#pid =

# Max parallel connections
max_connections = 5

# Max size of request body (bytes)
max_content_length = 100000000

# Socket timeout (seconds)
#timeout = 30

# SSL flag, enable HTTPS protocol
#ssl = False

# SSL certificate path
certificate = /etc/ssl/certs/ssl-cert-snakeoil.pem

# SSL private key
key = /etc/ssl/private/ssl-cert-snakeoil.key

# CA certificate for validating clients. This can be used to secure
# TCP traffic between Radicale and a reverse proxy
#certificate_authority =

# SSL Protocol used. See python's ssl module for available values
#protocol = PROTOCOL_TLSv1_2

# Available ciphers. See python's ssl module for available ciphers
#ciphers =

# Reverse DNS to resolve client address in logs
#dns_lookup = True

# Message displayed in the client when a password is needed
#realm = Radicale - Password Required


[encoding]

# Encoding for responding requests
#request = utf-8

# Encoding for storing local collections
#stock = utf-8


[auth]

# Authentication method
# Value: none | htpasswd | remote_user | http_x_remote_user
type = htpasswd

# Htpasswd filename
htpasswd_filename = /etc/radicale/users

# Htpasswd encryption method
# Value: plain | sha1 | ssha | crypt | bcrypt | md5
# Only bcrypt can be considered secure.
# bcrypt and md5 require the passlib library to be installed.
htpasswd_encryption = md5

# Incorrect authentication delay (seconds)
delay = 2


[rights]

# Rights backend
# Value: none | authenticated | owner_only | owner_write | from_file
type = from_file

# File for rights management from_file
file = /etc/radicale/rights


[storage]

# Storage backend
# Value: multifilesystem
#type = multifilesystem

# Folder for storing local collections, created if not present
filesystem_folder = /home/dietpi/calendarios

# Lock the storage. Never start multiple instances of Radicale or edit the
# storage externally while Radicale is running if disabled.
#filesystem_locking = True

# Sync all changes to disk during requests. (This can impair performance.)
# Disabling it increases the risk of data loss, when the system crashes or
# power fails!
#filesystem_fsync = True

# Delete sync token that are older (seconds)
#max_sync_token_age = 2592000

# Close the lock file when no more clients are waiting.
# This option is not very useful in general, but on Windows files that are
# opened cannot be deleted.
#filesystem_close_lock_file = False

# Command that is run after changes to storage
# Example: ([ -d .git ] || git init) && ([ -e .gitignore ] || printf '.Radicale.cache\n.Radicale.lock\n.Radicale.tmp-*\n' > .gitignore) && git add -A && (git diff --cached --quiet || git commit -m "Changes by "%(user)s)
#hook =


[web]

# Web interface backend
# Value: none | internal
type = internal


[logging]

# Logging configuration file
# If no config is given, simple information is printed on the standard output
# For more information about the syntax of the configuration file, see:
# http://docs.python.org/library/logging.config.html
#config =

# Set the default logging level to debug
#debug = False

# Store all environment variables (including those set in the shell)
#full_environment = False

# Don't include passwords in logs
#mask_passwords = True


[headers]

# Additional HTTP headers
#Access-Control-Allow-Origin = *
```

Líneas a tener en cuenta:

- **hosts**, aquí va la ip del servidor
- **filesystem_folder**, la dirección donde se ubican los calendarios

Solo falta entrar en la web [localhost](http:localhost:5232), o en la dirección Ip del servidor y crear vuestro calendario y vuestra libreta de direcciones, instalar **DAV<sub>x<sup>5</sup></sub>** en vuestro móvil y empezar a usarlo. Si quieres que se actualice fuera de casa échale un ojo [aquí](https://clonbg.netlify.app/#/stories/free-dns), además acuerdate de abrir el puerto *5232* en vuestro router.


Salu2

# Primeros pasos con PyQt y QtDesigner. Primer programa con Python
#### 05/05/2020

Vamos a crear nuestro primer programa gráfico con Python y PyQt, es mucho más sencillo de lo que parece. Lo primero que tenemos que hacer es instalar las librerías. Si estás en *Arch/Linux* como estoy yo:

	sudo pacman -S python-pyqt5 python

En nuestro menú nos habrá salido un programa llamado *QtDesigner*, lo abrimos

![QtDesigner](https://silly-goldberg-68d2eb.netlify.com/primeros-pasos-python-qt/qtdesigner.png	"Abriendo QtDesigner")

Cada vez que lo abrimos nos pregunta con que *plantilla* vamos a empezar. Le daremos *Main Window*, que es la raiz del programa. Qt funciona con un sistema de *Widgets*, todo lo que se añade es un *widget*, un botón, un label, etc.
Para crear nuestro primer programa añadiremos un *Label* y un *Push Button* a  nuestra ventana.

![Main Window](https://clonbg.netlify.app/primeros-pasos-python-qt/mainWindow.png	"Arrastrando Widgets")

Podemos ver como queda la interfaz con *Control+R*

![Vista](https://clonbg.netlify.app/primeros-pasos-python-qt/vista.png	"Vista del programa")

Ahora solo falta guardar la interfaz. *File > Save* y guardamos el archivo *ui*. Yo lo he llamado *post.ui*. Ahora al lado de donde hemos guardado el archivo *post.ui* creamos un archivo de *python*, yo lo he llamado *post.py* con este contenido:

	from PyQt5 import QtWidgets, uic, QtCore
	from PyQt5.QtWidgets import *

	app = QtWidgets.QApplication([])
	dlg = uic.loadUi('post.ui')

	# Contenido del programa

	dlg.show()
	app.exec()

y lo ejecutamos desde la línea de terminal:

	python post.py

Si todo ha ido bien se nos tiene que abrir el programa. Ahora vamos a hacer que cuando hagamos click en el botón cambie el texto del *Label*. El programa quedaría así:

	from PyQt5 import QtWidgets, uic, QtCore
	from PyQt5.QtWidgets import *

	app = QtWidgets.QApplication([])
	dlg = uic.loadUi('post.ui')

	# Creamos la función que cambiará el texto
	def cambio():
		dlg.label.setText('Este texto ha cambiado')

	# Creamos la acción con su función
	dlg.pushButton.clicked.connect(cambio)

	dlg.show()
	app.exec()

Y cuando clickamos en el botón:

![textoCambiado](https://clonbg.netlify.app/primeros-pasos-python-qt/texto.png	"Texto cambiado")

Salu2

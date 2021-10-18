# Minimizar al *tray* un programa hecho en **PyQt5**
#### 29/08/2021

Como podeis ver en el post sobre [Mi primer *CRUD* con *Python*](https://clonbg.netlify.app/#/stories/crud_con_python), tenía hecho un programa que simplemente era un registro de usuarios implementado en *Python* con *PyQt5* y *Mysql3* como base de datos. Funcionaba bien pero había dejado para más adelante algunas funciones (ya sabéis lo que pasa con estas cosas). Ahora he escrito unos cambios y tiene icono en el *tray* del sistema y se puede cerrar,  minimizar y maximizar a discrección.

![](https://clonbg.netlify.app/pyqt5-icono/icono-tray.png)

![](https://clonbg.netlify.app/pyqt5-icono/menu-icono.png) 

Veamos como lo he hecho:

- Lo primero que he hecho ha sido añadir un icono y un título a la barra del programa con estas dos líneas:
```
dlg.setWindowTitle('Base de datos de usuarios en SQLite3')  # Nombre del título
dlg.setWindowIcon(QIcon('usuario.png'))  # Icono del título
```
Evidentemente hay que tener un icono con el nombre *usuario.png*.

- Añadir, en este caso el mismo icono, al *tray* del sistema:
```
trayIcon = QSystemTrayIcon(QIcon('usuario.png'), parent=app)
trayIcon.setToolTip('Base de Datos SQLite3')
def icono():
    if dlg.checkIcono.isChecked():
        trayIcon.show()
    else:
        trayIcon.hide()
```
- Aquí creamos el menu del icono y le añadimos tres acciones, *maximizar*, *minimizar* y *cerrar*, después eliminamos *maximizar* ya que no le hace falta la primera vez.
```
menu = QMenu()
minimizeAction = menu.addAction('Minimizar')
minimizeAction.triggered.connect(minimiza)
quitAction = menu.addAction('Cerrar')
quitAction.triggered.connect(dlg.close)
trayIcon.setContextMenu(menu)  # Aquí se añaden al icono
maximizeAction = menu.addAction('Maximizar')
maximizeAction.triggered.connect(maximiza)
menu.removeAction(maximizeAction)  # Una vez creada se elimina del icono
```

- Más tarde centramos la ventana, he necesitado hacerlo ya que cuando se maximizaba desde el menú salía la barra fuera de la pantalla.
```
qr = dlg.frameGeometry()
cp = QtWidgets.QDesktopWidget().availableGeometry().center()
qr.moveCenter(cp)
dlg.move(qr.topLeft())
```

- Las funciones que minimizan y maximizan la aplicación. El motivo de eliminar la acción de *cerrar* y añadirla más tarde es para que siempre esté al final del menú.
```
def minimiza():
    dlg.hide()
    menu.removeAction(quitAction)
    menu.addAction(maximizeAction)
    menu.addAction(quitAction)
    menu.removeAction(minimizeAction)

def maximiza():
    dlg.show()
    menu.removeAction(quitAction)
    menu.addAction(minimizeAction)
    menu.addAction(quitAction)
    menu.removeAction(maximizeAction)
```
- Le he añadido la opción de minimizar y maximizar al hacer doble click en el icono
```
def onTrayIconActivated(reason):
    if reason == trayIcon.DoubleClick:
        # print('double click')
        if dlg.isVisible():
            minimiza()
        else:
            maximiza()
trayIcon.activated.connect(onTrayIconActivated)
```

Otras funciones añadidas son:

- Comprobamos que el DNI no exista en la base de datos
- Comprobamos que el nombre y apellidos solo acepten letras
- Mensajes de error varios

El código completo lo puedes encontrar en mi repositorio de [**Github**](https://github.com/clonbg/crud-sqlite3-python)

Salu2

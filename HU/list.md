# Cosas que necesito que se convertirían en HU

HITO1: una petición moqueada
* Hacer un test tonto
* Responder a un endpoint tonto
* Decidir el formato de la petición
* Responder a un endpoint con los formatos de entrada y salida, pero totalmente moqueado.
* Logs en consola.

HITO2: endpoint que contesta datos almacenados en la BD
* Crear la configuración de BD.
* Simular la BD en tests.
* Leer de BD.
* Contestar al endpoint con los datos de la BD (rellenados a mano)
* Crear datos de ejemplo
* Logs en BD.

HITO3: poblar la BD
* Proceso que lee de una fuente de datos.
* Mejorar el proceso para almacenar en BD.
* Endpoint para desencadenar el proceso.

HITO4: inteligencia
* Nuevo Endpoint que permita consultar datos específicos.
* Permitir la interpolación entre dos valores en el tiempo.
* Añadir otra fuente de datos.

HITO5: geolocalización
* Mejorar el proceso de lectura para incorporar información geográfica.
* Permitir en los endpoints búsquedas a través de coordenadas.
* Permitir interpolación entre puntos del espacio de valores no acumulables.
* Permitir cálculo simple en áreas para valores acumulables.


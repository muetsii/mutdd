# mutdd
Open enviromental data API

This project would offer an unified API to access enviromental data captured by different sensors and offered by different APIs.

## Autor

Mu mu@member.fsf.org

## Diseño de la solución

Opto por la implentación en NodeJS.

Node es una tecnología muy orientada a servir y consumir APIs REST (y otras). Su particular asincronismo monohebra ofrece muy buen rendimiento en peticiones cortas con muchas operaciones de entrada salida, como es servir una petición, consumir una petición o la lectura de la base de datos.

Habrá dos partes separadas, una para servir los datos y otra para consumirlos de las distintas fuentes. Para la segunda habrá estructuras que abstraigan del lugar y la forma de los datos fuente y permitan procesar todas las fuentes de una manera unificada. Para esto el dinamismo de Javascript también será de ayuda.


## Selección de servicios

### Logging

De entre los servicios mencionados me interesa logstash, por ser libre.

No obstante, dada la dificultad para encontrar un servicio gratuito para probar, optaría por aislar el detalle usando una librería de logging que aceptase varios servicios, como winston (Javascript).

Dicha biblioteca permite usar diferentes transportes. Uno de ellos es escribir en postgres. Eso es perfecto por ahora porque puedo verificarlo localmente sin tener que levantar ningún servicio, y luego pasar a una plataforma de logging es tan simple como configurar un trasnporte distinto.

### Configuración remota

Me ha llamado la atención etcd y lo probaré con la intención de aprender.

### Almacenamiento de datos

Para almacenar los datos de distintas fuentes, una BD relacional parece lo adecuado (aunque reconozco mi desconocimiento de NoSQL).

Aunque tengo más experiencia en mysql/mariadb, las mencionadas características de búsqueda geográfica de PostgreSQL suenan exactamente como algo que podríamos usar (por ejemplo, para calcular contaminación en ciertas zonas).

Por lo que me quedo con Postgres.

### Otros

No parece que vaya a necesitar un gestor de colas como RabbitMQ.

La elección de un servidor web dependerá de la tecnología finalmente seleccionada para la implementación, aunque tampoco será determinante por el momento.

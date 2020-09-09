# mutdd
Open enviromental data API

This project would offer an unified API to access enviromental data captured by different sensors and offered by different APIs.

## Autor

Mu mu@member.fsf.org

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

# AWS SES Email Sender

Esta es una simple prueba para el envió de correos utilizando AWS SES y Nodemailer.

## Requisitos

Antes de usar tiene que tener un archivo [.env](./.env) con el siguiente contenido:

```
ACCESS_KEY_ID=<ACCESS_KEY_ID>
SECRET_ACCESS_KEY=<SECRET_ACCESS_KEY>
REGION=<REGION>
# son los correos registrados en SES como identidades
EMAIL_1=<EMAIL_1>
EMAIL_2=<EMAIL_2>
```

Tener instalado node.js en la versión 21 o superior.

## AWS SES

Se tiene que tener un usuario IAM con la política de `AmazonSESFullAccess` para poder enviar correos.

Luego, en la parte de seguridad se tiene que crear una clave de acceso. Este generara la credenciales que te permitirán usar el SDK.

> Recomendación: descarga el archivo .csv

Después, tienes que ir a AWS SES, crear las identidades de dos correos que uses para pruebas.

> NO FUNCIONARA si los correos no están registrados como identidades del ambiente de SES.

## Comandos

Con un simple 'node index.js' estando en la carpeta raíz, se puede probar el código de envió bidireccional entre los dos correos.

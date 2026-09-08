# Regalito para Fran 

Esta parte es para conectar la infraestructura de Urban-Kicks en AWS.

## La idea

Yo dejo el codigo y tu conectas las piezas de AWS. Asi no nos pisamos los cambios.

## Cognito

Crear el User Pool y un App Client para el frontend.

Necesito despues:

- URL/issuer del User Pool.
- Client ID.
- Redirect URI.
- Logout URI.
- Grupos `Admin`, `Operator` y `Customer`.

El backend espera:

`COGNITO_ISSUER_URI`

## EC2 / contenedores


Puertos locales de referencia:

- BFF: 8080
- Orders: 8081
- Catalog: 8082
- Notify: 8083
- Report: 8084
- Audit: 8085

## API Gateway


## Base de datos

El codigo actual deja los datos en memoria para poder probar el flujo. Cuando tengas la base de AWS, conectamos las entidades y repositorios.

## Mensajeria

Notify, Report y Audit estan separados para que despues podamos conectar los servicios de mensajeria que usemos en AWS.

## Lo que necesito de ti

Cuando tengas AWS armado, pasame:

- Cognito issuer + client ID.
- URL publica del BFF/API Gateway.
- URLs internas de servicios si hacen falta.
- Base de datos y credenciales mediante variables de entorno, no dentro del repo.
- Configuracion de mensajeria.

## Checklist rapido

- [ ] Cognito
- [ ] Grupos de usuarios
- [ ] EC2 / contenedores
- [ ] API Gateway
- [ ] Base de datos
- [ ] Mensajeria
- [ ] Variables de entorno
- [ ] HTTPS / dominio si corresponde

# Urban-Kicks 👟

Proyecto de tienda de zapatillas.

## Qué hay acá

- `urban-kicks-frontend`: Angular + OIDC/OAuth2.
- `urban-kicks-bff`: Spring Boot + validación de JWT.
- `urban-kicks-orders`: pedidos.
- `urban-kicks-catalog`: catálogo y stock.
- `urban-kicks-notify`: base para notificaciones.
- `urban-kicks-report`: reportes.
- `urban-kicks-audit`: auditoría.
- `docs/regalito para fran.md`: lo que queda pendiente de infraestructura AWS.

## Levantar backend

Cada servicio Spring se puede ejecutar con:

```bash
./gradlew bootRun
```

En Windows:

```powershell
gradlew.bat bootRun
```

Para el BFF se necesita definir:

```text
COGNITO_ISSUER_URI=https://cognito-idp.REGION.amazonaws.com/USER_POOL_ID
```

## Frontend

```bash
cd urban-kicks-frontend
npm install
npm start
```

Antes de probar login, completar `src/app/auth/auth.config.ts` con los datos del App Client de Cognito.

## Importante

AWS queda preparado para que Fran conecte Cognito, API Gateway, EC2, base de datos y mensajería. No hay credenciales reales dentro del proyecto.

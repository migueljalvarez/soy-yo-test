# Prueba Técnica Nodejs

## Requerimientos: 
* Node `v16.13.1`
* Docker `v20.10.7`
* Yarn `v1.22.4` o Npm `v8.1.2`


### Pasos para ejecutar la aplicación.
1. Copiar el archivo `.env.example` a `.env`,  agregar los valores correspondiente.
1.1. `NODE_ENV`: recibe cualquiera de los siguientes valores, `production`, `prod`, `qa`,`dev`.
1.2. `PORT`: en caso de ejecutar la aplicación con docker, colocar como valor por defecto `3000`, en caso contrario coloca el de tu preferencia.
2. Ejecutar el comando `yarn install`.
3. Ejecutar `yarn start` o `yarn run dev`.

### Endpoint
`POST /entities/filter`

Recibe como cuerpo el siguiente objeto: 

```
{
  "startId": 1,
  "endId": 5
}
```

Si la respuesta es positiva recibira un array de objetos como se muestra a continuación:
```
[
    {
        "entityId": 1,
        "name": "Tuya",
        "identificationNumber": "123456789",
        "expirationDate": "2030-10-27",
        "contactName": "Ana Maria Palacio",
        "contactMail": "apalacioh@tuya.com.co",
        "ipAddress": "",
        "logo": ""
    },
    {
        "entityId": 2,
        "name": "Bancolombia",
        "identificationNumber": "987654321",
        "expirationDate": "2030-10-27",
        "contactName": "Mauricio Serna Florez",
        "contactMail": "msflore@bancolombia.com.co",
        "ipAddress": "",
        "logo": ""
    },
    ...
]
```
En caso de error mostrara los siguientes mensajes de error: 

```
{
    "Error": "Error en validación datos de entrada"
}
```

```
{
    "Error": "Error no se encuentra para rango especificado"
}
```
```
{
    "Error": "Request failed with status code 403"
}
```
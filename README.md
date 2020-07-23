# Servicio de test con registro de usuarios. 

## Introducción
Se trata de un servicio web con un sistema de gestión de usuarios (Registro, login, etc) con funcionalidad diferente para cada uno de ellos. 

Se trata de un servicio relizada con el framework de Amazon AWS Amplify. 
- El frontend se ha relizado con React
- El backend es una API GraphQL con una base de datos NoSQL asociada. Se utilizan los servicios de API GW de AWS, y S3 para el hosting del front estáticos, se aprovecha cognito y IAM de AWS también para gestionar los permisos y usuarios del sistema. 


## Requisitos
- Node.js v12.x o superior
- npm v5.x o superior
- git v2.14 o superior
- Cuenta en AWS (Amazon Web services)
- [Amplify CLI](https://github.com/aws-amplify/amplify-cli)

## Lanzar el programa (en remoto)
1. git clone
2. amplify configure
3. amplify push
4. amplify publish
5. amplify status (check status)

# Lanzar en local
2. npm install
3. npm start

## Informacion adicional
### Initialize
1. Configure amplify
```bash
amplify configure
```
2. Create React App Wrapper
```bash
npx create-react-app . 
```
3. Initialize Amplify in the project 
```bash
amplify init 
```


### Basic libraries
1. Install basic libraries for our project
```bash
npm install aws-amplify @aws-amplify/ui-react react-dom react-router-dom
```
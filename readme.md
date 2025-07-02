Tp2

Api Rest venta de electrodomesticos

Este proyecto consiste en:
_ creacion de usuarios 
_ busqueda de usuarios (todos o por id)
_ muestra de productos cargados
_ compra de productos
_ muestra de productos comprados por usuarios, y el descuento que se les fue aplicado.

Preparacion antes de levantamiento de servidor:

Instalar XAMPP, levantar el servidor apache y el servidor de base de datos que usemos (mi caso MySql).
Este servidor nos dara un puerto para conectar la base de datos con express.

tener un archivo .env con los datos correspondientes en
SERVER_PORT=80 //numero de puerto personal
DB_NAME="nombre" //nombre de base de datos ya creada
DB_USER="" //usuario con acceso a la base de datos
DB_PASS="" //contraseña con acceso a la base de datos, en caso de que no haya contraseña dejar vacio
DB_HOST="" //usualmente es localhost
DB_DIALECT="" //tipo de interprete para sql, mas informacion en sequelize
DB_PORT=1234 //puerto de la base de datos dado por XAMPP

Levantamiento de servidor:

_vamos a la consola de la carpeta de proyecto y levantamos 
el servidor con npm run dev en consola.
Si todo funciona correctamente, podemos ir directo a probar rutas con insomnia/postman.



ENRUTADOS

_ User

GET 

/users 
(trae a todos los usuarios) 

/users/:id 
(trae a un usuario por id numerico) 
(solo ADMIN cuando agregue comprobacion de login Y usuario)


POST

/users/ 
(crea usuario)
ejemplo:
{
	"name": "moreno",
	"mail": "mailtrabajo@mail.com", 
	"pass": "miCumple26", 
	"RoleId": 2
}

_ Product

GET 

/prod  
(trae todos los productos)

/prod/:mail 
(trae todo lo comprado por un usuario) (deberia hacerse SOLO si esta logueado)



POST

/prod/ 
(compra producto) (SOLO LOGUEO)
{
    "model": "stringTal",
    "mail": "mailTal@.com"
}

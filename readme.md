Tp2

Api Rest venta de electrodomesticos



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

import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

// Servicios Api Rest VS (Api GraphQL)
@Controller("usuario")
export class UsuarioController{

    @Get("/filterByEmail")
    funListarSoloCorreo(){
        return "Listar Usuarios";
    }

    @Get("/filterByNombreEstado")
    funListarSoloNombreConEstado(){
        return "Listar Usuarios";
    }


    @Post("/")
    funGuardar(){
        return "Guardar Usuarios";
    }

    @Get("/:id")
    funMostrar(){
        return "Mostrar Usuarios";
    }

    @Put("/:id")
    funModificar(){
        return "Modificar Usuarios";
    }

    @Delete("/:id")
    funEliminar(){
        return "Eliminar Usuarios";
    }

}
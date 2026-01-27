import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";

@Controller("/producto")
export class ProductoController{

    @Get("")
    funListar(){
        return "Lista de Productos"
    }

    @Post()
    funGuardar(){
        return "Guardar Producto"
    }

    @Get(":id")
    funMostrar(){
        return "Mostrando Datos"
    }

    @Patch(":id")
    funModificar(){

        return "Modificar Producto"
        
    }

    @Delete(":id")
    funEliminar(){
        return "Eliminar Producto"
    }
}
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductoService } from "./producto.service";

@Controller("/producto")
export class ProductoController{

    constructor(private productoService: ProductoService){

    }

    @Get("")
    funListar(){
        return this.productoService.getProductos()
    }

    @Post()
    funGuardar(@Body() datos){
        return this.productoService.sendGuardarProducto(datos);
    }

    @Get(":id")
    funMostrar(@Param('id')id: number){
        return this.productoService.getMostrar(id);
    }

    @Patch(":id")
    funModificar(@Param('id')id: number, @Body() datos){

        return this.productoService.funActualizar(id, datos);
        
    }

    @Delete(":id")
    funEliminar(@Param('id')id: number){
        return this.productoService.funEliminar(id)
    }
}
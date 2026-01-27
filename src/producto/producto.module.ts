import { Module } from "@nestjs/common";
import { ProductoController } from "./producto.controller";

@Module({
    imports: [],
    controllers: [ProductoController],
    providers: []
})
export class ProductoModule{

}
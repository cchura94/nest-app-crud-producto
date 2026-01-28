import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Producto } from "./entity/producto.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductoService{

    constructor(@InjectRepository(Producto) private prodRepository: Repository<Producto>){}

    getProductos(){
        return this.prodRepository.find();
    }

    sendGuardarProducto(datos){
        const prod = this.prodRepository.create(datos);
        return this.prodRepository.save(prod);
    }

    getMostrar(id: number){
        return this.prodRepository.findOneBy({id});
    }

    funActualizar(id, datos){
        return this.prodRepository.update(id, datos);
    }

    funEliminar(id: number){
        return this.prodRepository.delete(id);
    }

}
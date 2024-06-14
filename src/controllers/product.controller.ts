import { Request, Response } from 'express'
import Product from '../models/product';


export const getProducts = async (req: Request, res: Response) => {
   const listProducts = await Product.findAll();
    res.json(listProducts);
}


export const getProduct = async (req: Request, res: Response) => {

    const { id } = req.params
    const producto = await Product.findByPk(id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({
            msg: `No existe usuario con el id ${id}`
        });
    }  
}

export const deleteProduct = (req: Request, res: Response) => {
    const {id}= req.params;
    res.json({
        msg:'delete product',
        id: id
    });
}


export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Product.create(body);
        res.json({
            msg: 'El Material fue creado exitosamente'
        });
    } catch (error) {
        console.error(error)
        res.json({
            msg: `Hubo un error al Crear el Material ${error}`
        });
    }

}

export const putProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const producto = await Product.findByPk(id);
    //console.log(body)

    try {
        if (producto) {
            producto.update(body);
            res.json({
                msg: 'Material actualizado con exito'
            });
        } else {
            res.status(404).json({
                msg: `No existe Material con id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({
            msg: `Hubo un error: ${error}`
        });
    }
}
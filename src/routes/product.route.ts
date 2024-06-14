import { Router } from 'express'
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '../controllers/product.controller';

const routerproduct = Router();

routerproduct.get('/', getProducts);
routerproduct.get('/:id', getProduct);
routerproduct.delete('/:id', deleteProduct);
routerproduct.post('/', postProduct);
routerproduct.put('/:id', putProduct);


export default routerproduct
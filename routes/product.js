import routerx from 'express-promise-router';
import ProductsController from "../controller/ProductsController";

const router = routerx();

router.post('/add',ProductsController.add);
router.get('/list',ProductsController.list);

export default router ;

import routerx from 'express-promise-router';
import CategoryController from "../controller/CategoryController";

const router = routerx();

router.post('/add',CategoryController.add);
router.get('/query',CategoryController.query);
router.get('/list',CategoryController.list);
router.put('/update',CategoryController.update);
router.delete('/remove',CategoryController.remove);
router.put('/activate',CategoryController.activate);
router.put('/deactivate',CategoryController.deactivate);

export default router ;

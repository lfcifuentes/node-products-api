import routerx from 'express-promise-router';

import categoryRouter from './category';
import productRouter from './product';

const router = routerx();

router.use('/category',categoryRouter);

router.use('/product',productRouter);

module.exports = router;

// import { privateRoute } from './../config/passport.js';
import { Router } from 'express';

import * as ApiController from '../controllers/apiController.js';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/dailyreport', ApiController.dailyreport);

router.post('/addemployee', ApiController.addemployee);
router.get('/allemployees', ApiController.allemployees);

export default router;

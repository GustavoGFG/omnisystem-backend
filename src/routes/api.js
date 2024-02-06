// import { privateRoute } from './../config/passport.js';
import { Router } from 'express';

import * as ApiController from '../controllers/apiController.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Onclick Database is Running');
});

router.post('/dailyreport', ApiController.dailyreport);

router.post('/addemployee', ApiController.addemployee);
router.get('/allemployees', ApiController.allemployees);

export default router;

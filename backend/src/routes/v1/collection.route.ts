import express from 'express';
import { collectionController } from '@/app/controllers';
const router = express.Router();

router.get('/', collectionController.index);
router.post('/', collectionController.create);

export default router;

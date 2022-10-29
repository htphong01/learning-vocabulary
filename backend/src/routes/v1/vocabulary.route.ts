import express from 'express';
import { vocabularyController } from '@/app/controllers';
const router = express.Router();

router.get('/', vocabularyController.index);
router.get('/collections/:collectionId', vocabularyController.collections);
router.post('/', vocabularyController.create);

export default router;

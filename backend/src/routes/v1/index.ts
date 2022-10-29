import express from 'express';
import vocabularyRoute from './vocabulary.route';
import collectionRoute from './collection.route';
const router = express.Router();

const defaultRoutes = [
  {
    path: '/vocabularies',
    route: vocabularyRoute,
  },
  {
    path: '/collections',
    route: collectionRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

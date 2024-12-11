import { DisplayMenu, AddMenu, Items, Additems } from '../controller/controller.js'
import express from 'express'

const router = express.Router();


router.get('/', DisplayMenu)

router.post('/', AddMenu)

router.get('/:id', Items)

router.post('/:id/items', Additems)

export default router;


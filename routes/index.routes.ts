import {Router} from "https://deno.land/x/oak@v10.5.1/mod.ts"
import * as userControllers from '../controllers/index.controllers.ts'
const router = new Router();

router.get('/',userControllers.getAllUsers)
router.post('/',userControllers.savelUser)
router.get('/users',userControllers.getQuery) // ojo ponerlo primero para que no choquen
router.get('/:id',userControllers.getUserById)


export default router;
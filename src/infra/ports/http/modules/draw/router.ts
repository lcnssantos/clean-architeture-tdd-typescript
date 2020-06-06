import {Router} from "express";
import {DrawControllerFactory } from "../../../../../ioc/controller";


const router = Router();

router.post('/:minScore', DrawControllerFactory().do)

export const drawRoutes = router;
import {Router} from "express";

import {participantsRouter} from '../modules/participants/router'
import {drawRoutes} from "../modules/draw/router";

export const router = Router();

router.use('/participant', participantsRouter)
router.use('/draw', drawRoutes)


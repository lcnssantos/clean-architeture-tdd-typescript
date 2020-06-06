import {Router} from "express";
import {ParticipantControllerFactory} from "../../../../../ioc/controller";


const router = Router();

router.post('/', ParticipantControllerFactory().create)

export const participantsRouter = router;
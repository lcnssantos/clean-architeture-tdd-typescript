import {ParticipantController} from "../infra/ports/http/modules/participants/controller";
import {ParticipantRepositoryFactory} from "./repository";
import {LoggerHelperFactory} from "./helper";
import {DrawController} from "../infra/ports/http/modules/draw/controller";

export const ParticipantControllerFactory = () => {
    return new ParticipantController(ParticipantRepositoryFactory(), LoggerHelperFactory())
}

export const DrawControllerFactory = () => {
    return new DrawController(ParticipantRepositoryFactory(), LoggerHelperFactory())
}
import { Router } from 'express';
import checkAuthentication from 'src/shared/http/middlewares/checkAuthentication';
import TodosController from '../controllers/TodosController';
import { celebrate, Joi, Segments } from 'celebrate';

const todosRouter = Router();
const todosController = new TodosController();

todosRouter.use(checkAuthentication);

todosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().optional(),
      deadline: Joi.date().optional(),
    },
  }),
  todosController.create,
);

todosRouter.get('/', todosController.list);

todosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().optional(),
      deadline: Joi.date().optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  todosController.update,
);

todosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  todosController.delete,
);

export default todosRouter;

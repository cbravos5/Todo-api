import { Router } from 'express';
import checkAuthentication from 'src/shared/http/middlewares/checkAuthentication';
import TodosController from '../controllers/TodosController';

const todosRouter = Router();
const todosController = new TodosController();

todosRouter.use(checkAuthentication);

todosRouter.post('/', todosController.create);

todosRouter.get('/', todosController.list);

todosRouter.put('/:id', todosController.update);

todosRouter.delete('/:id', todosController.delete);

export default todosRouter;

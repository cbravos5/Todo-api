import { Router } from 'express';
import todosRouter from 'src/modules/todos/routes/todos.routes';
import sessionsRouter from 'src/modules/users/routes/sessions.routes';
import usersRouter from 'src/modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/todos', todosRouter);
routes.use('/sessions', sessionsRouter);

export default routes;

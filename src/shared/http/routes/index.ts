import { Router } from 'express';
import usersRouter from 'src/modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);

export default routes;

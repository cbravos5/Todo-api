import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { Joi, celebrate, Segments } from 'celebrate';
import checkAuthentication from 'src/shared/http/middlewares/checkAuthentication';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
    },
  }),
  usersController.create,
);

usersRouter.get('/', checkAuthentication, usersController.show);

export default usersRouter;

import { Router } from 'express'
import { deleteUserById, getUserById, getUsers, postUser, putUserById } from '../controllers/user.controller';

const router = Router();
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.post('/', postUser);
router.put('/:id', putUserById);
export default router;
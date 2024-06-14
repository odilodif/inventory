import { Request, Response } from 'express'
import User from '../models/user';


export const getUsers = async (req: Request, res: Response) => {

    const listUsers = await User.findAll(

    );
    res.json(listUsers);
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await User.findByPk(id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `No existe usuario con el id ${id}`
        });
    }

}
/** No delete Phisical - No borrado Fisico no se utiliza esto por ser un borrado fisico */
export const deleteUserById = (req: Request, res: Response) => {
    res.json({
        msg: 'delete Usuario By Id',
        id: req.params.id

    });
}

/** create User */
export const postUser = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await User.create(body);
        res.json({
            msg: 'El usuario fue creado exitosamente'
        });
    } catch (error) {
        console.error(error)
        res.json({
            msg: `Hubo un error al Crear el usuario ${error}`
        });
    }

}

export const putUserById = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    const user = await User.findByPk(id);
    //console.log(body)

    try {
        if (user) {
            user.update(body);
            res.json({
                msg: 'Usuario actualizado con exito'
            });
        } else {
            res.status(404).json({
                msg: `No existe usuario con id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({
            msg: `Hubo un error: ${error}`
        });
    }
}
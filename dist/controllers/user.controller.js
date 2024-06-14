"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUserById = exports.postUser = exports.deleteUserById = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.default.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({
            msg: `No existe usuario con el id ${id}`
        });
    }
});
exports.getUserById = getUserById;
/** No delete Phisical - No borrado Fisico no se utiliza esto por ser un borrado fisico */
const deleteUserById = (req, res) => {
    res.json({
        msg: 'delete Usuario By Id',
        id: req.params.id
    });
};
exports.deleteUserById = deleteUserById;
/** create User */
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield user_1.default.create(body);
        res.json({
            msg: 'El usuario fue creado exitosamente'
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: `Hubo un error al Crear el usuario ${error}`
        });
    }
});
exports.postUser = postUser;
const putUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    //console.log(body)
    try {
        if (user) {
            user.update(body);
            res.json({
                msg: 'Usuario actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe usuario con id ${id}`
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(404).json({
            msg: `Hubo un error: ${error}`
        });
    }
});
exports.putUserById = putUserById;

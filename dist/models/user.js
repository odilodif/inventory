"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const User = connectiondb_1.default.define('usuario', {
    create_uid: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    login_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    street_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    tef_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    password_usr: {
        type: sequelize_1.DataTypes.STRING
    },
    write_uid: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'usuario',
    createdAt: true,
    updatedAt: true
});
exports.default = User;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectiondb_1 = __importDefault(require("../db/connectiondb"));
const Product = connectiondb_1.default.define('material', {
    codigo_mtrl: {
        type: sequelize_1.DataTypes.STRING
    },
    description_mtrl: {
        type: sequelize_1.DataTypes.STRING
    },
    unidad_med_mtrl: {
        type: sequelize_1.DataTypes.STRING
    },
    value_item_mtrl: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    state_mtrl: {
        type: sequelize_1.DataTypes.CHAR
    },
    create_uid: {
        type: sequelize_1.DataTypes.INTEGER
    },
    create_date: {
        type: sequelize_1.DataTypes.DATE
    },
    write_date: {
        type: sequelize_1.DataTypes.DATE
    },
    write_udi: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_cat: {
        type: sequelize_1.DataTypes.INTEGER
    },
    potency: {
        type: sequelize_1.DataTypes.INTEGER
    },
    obs_mtrl: {
        type: sequelize_1.DataTypes.TEXT
    }
}, {
    tableName: 'material',
    createdAt: true,
    updatedAt: true
});
exports.default = Product;

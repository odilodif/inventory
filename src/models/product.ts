import { DataTypes,Sequelize } from 'sequelize'
import db from '../db/connectiondb'

const Product = db.define('material',{
  
    codigo_mtrl:{
        type: DataTypes.STRING
    },   
    description_mtrl:{
        type: DataTypes.STRING
    },
    unidad_med_mtrl:{
        type: DataTypes.STRING
    },
    value_item_mtrl:{
        type: DataTypes.DOUBLE
    },
    state_mtrl:{
        type: DataTypes.CHAR
    },
    create_uid:{
        type: DataTypes.INTEGER
    },
    create_date:{
        type: DataTypes.DATE
    },
    write_date:{
        type: DataTypes.DATE
    },
    write_udi:{
        type: DataTypes.INTEGER
    },

    id_cat:{
        type: DataTypes.INTEGER
    },
    potency:{
        type: DataTypes.INTEGER
    },
    obs_mtrl:{
        type: DataTypes.TEXT
    }
},{
    tableName: 'material',
    createdAt: true,
    updatedAt: true
   
});

export default Product;
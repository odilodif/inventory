import { DataTypes,Sequelize } from 'sequelize'
import db from '../db/connectiondb'

const User = db.define('usuario',{
  
    create_uid:{
        type: DataTypes.INTEGER
    },   
    name_usr:{
        type: DataTypes.STRING
    },
    lastname_usr:{
        type: DataTypes.STRING
    },
    login_usr:{
        type: DataTypes.STRING
    },
    street_usr:{
        type: DataTypes.STRING
    },
    tef_usr:{
        type: DataTypes.STRING
    },
    password_usr:{
        type: DataTypes.STRING
    },
    write_uid:{
        type: DataTypes.INTEGER
    }
    
},{
    tableName: 'usuario',
    createdAt: true,
    updatedAt: true
   
});

export default User;
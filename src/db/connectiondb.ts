import { Sequelize} from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('llacsag', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres' 
  });

  export default sequelize;
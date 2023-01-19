module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("usuarios", {
      nombre: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };
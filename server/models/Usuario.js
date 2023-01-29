module.exports = (sequelize, Sequelize) => {
    const Usuarios = sequelize.define("Usuarios", {
      userId: {
        type: Sequelize.INTEGER
      },
      nombreCompleto: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      }
    });
  
    return Usuarios;
  };
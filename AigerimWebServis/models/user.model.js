module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    admin_id: {
      type: Sequelize.STRING
    },

    selected_playlist_id: {
      type: Sequelize.STRING
    },

    categori_id: {
      type: Sequelize.STRING
    },
    categori_name: {
      type: Sequelize.STRING
    },
    Account_Media_Size_Limit:
    {
      type: Sequelize.STRING
    },
    Sub_admin_id: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    email_verified_at: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.STRING
    },
    remember_token: {
      type: Sequelize.STRING
    },
    updated_at: {
      type: Sequelize.STRING
    },

  });

  return User;
};

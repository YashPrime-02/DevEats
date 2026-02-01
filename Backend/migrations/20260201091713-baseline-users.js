"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Baseline migration for existing users table
    // This table ALREADY exists in DB
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(20),
        defaultValue: "user",
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface) {
    // DO NOT DROP in baseline migrations
    // This is intentionally left empty
  },
};

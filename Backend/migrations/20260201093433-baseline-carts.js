"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("carts", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "active",
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // ✅ Explicit index names (avoid collision in Neon)
    await queryInterface.addIndex("carts", ["user_id"], {
      name: "idx_carts_user_id",
    });

    await queryInterface.addIndex("carts", ["status"], {
      name: "idx_carts_status",
    });
  },

  async down(queryInterface) {
    // baseline migration => no drop
  },
};

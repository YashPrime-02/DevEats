"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
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

      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },

      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: "placed",
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // ✅ Explicit index names (avoid collisions)
    await queryInterface.addIndex("orders", ["user_id"], {
      name: "idx_orders_user_id",
    });

    await queryInterface.addIndex("orders", ["status"], {
      name: "idx_orders_status",
    });

    await queryInterface.addIndex("orders", ["created_at"], {
      name: "idx_orders_created_at",
    });
  },

  async down(queryInterface) {
    // baseline migration => no drop
  },
};

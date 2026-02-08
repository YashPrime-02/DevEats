"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_items", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      external_item_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },

      image_url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // ✅ Explicit index names (avoid collisions)
    await queryInterface.addIndex("order_items", ["order_id"], {
      name: "idx_order_items_order_id",
    });

    await queryInterface.addIndex("order_items", ["external_item_id"], {
      name: "idx_order_items_external_item_id",
    });
  },

  async down(queryInterface) {
    // baseline migration => no drop
  },
};

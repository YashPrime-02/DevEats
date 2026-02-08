"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cart_items", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      cart_id: {
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
    await queryInterface.addIndex("cart_items", ["cart_id"], {
      name: "idx_cart_items_cart_id",
    });

    await queryInterface.addIndex("cart_items", ["external_item_id"], {
      name: "idx_cart_items_external_item_id",
    });

    // Prevent duplicate same product in same cart
    await queryInterface.addConstraint("cart_items", {
      fields: ["cart_id", "external_item_id"],
      type: "unique",
      name: "unique_cart_item",
    });
  },

  async down(queryInterface) {
    // baseline migration => no drop
  },
};

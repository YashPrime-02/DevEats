"use strict";

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(20),
        defaultValue: "active",
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "carts",
      timestamps: false,
    }
  );

  return Cart;
};

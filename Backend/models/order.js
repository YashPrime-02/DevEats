"use strict";

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
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
      total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(20),
        defaultValue: "placed",
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "orders",
      timestamps: false,
    }
  );

  return Order;
};

"use strict";

module.exports = (sequelize, DataTypes) => {
  const AdminLog = sequelize.define(
    "AdminLog",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      admin_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      action: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "admin_logs",
      timestamps: false,
    }
  );

  return AdminLog;
};

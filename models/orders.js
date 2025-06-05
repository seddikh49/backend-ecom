import { sequelize } from '../postgres/postgres.js';
import { DataTypes } from 'sequelize';

const Order = sequelize.define(
  'Order',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER, // ✅ نستخدم STRING بدل NUMBER
      allowNull: false,
    },
  },
  {
    // Options مثل timestamps يمكن إضافتها هنا إن أردت
    // timestamps: false
  }
);

export default Order;

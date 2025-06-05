import express from 'express';
import { sequelize, connect } from './postgres/postgres.js';
import Order from './models/orders.js';

import productRouter from './routes/product.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/product', productRouter)
















app.get('/orders', async (req, res) => {
  const users = await Order.findAll();
  res.json(users);
});




app.post('/orders/add', async (req, res) => {
  const { firstName, phoneNumber } = req.body
  if (!firstName || !phoneNumber) {
    return res.status(400).json({ error: "الاسم ورقم الهاتف مطلوبان" });
  }
  try {
    const newOrder = await Order.create({ firstName, phoneNumber });
    res.status(201).json(newOrder);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "حدث خطأ أثناء إنشاء الطلب" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});



connect().then(() => {
  sequelize.sync()
    .then(() => {
      console.log("✅ Database synced");
    })
    .catch((err) => {
      console.error("❌ Error syncing database:", err);
    });
});
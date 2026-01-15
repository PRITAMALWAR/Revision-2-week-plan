import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/analytics", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number
});

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  createdAt: Date
});

const User = mongoose.model("User", UserSchema);
const Product = mongoose.model("Product", ProductSchema);
const Order = mongoose.model("Order", OrderSchema);


app.get("/api/analytics/orders", async (req, res) => {
  try {
    const analytics = await Order.aggregate([
      // Join users
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" },

      // Join products
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },

      {
        $addFields: {
          orderAmount: {
            $multiply: ["$quantity", "$product.price"]
          }
        }
      },

      {
        $facet: {
          topCustomers: [
            {
              $group: {
                _id: "$user._id",
                name: { $first: "$user.name" },
                totalSpent: { $sum: "$orderAmount" }
              }
            },
            { $sort: { totalSpent: -1 } },
            { $limit: 5 }
          ],
          salesByCategory: [
            {
              $group: {
                _id: "$product.category",
                totalSales: { $sum: "$orderAmount" }
              }
            },
            { $sort: { totalSales: -1 } }
          ]
        }
      }
    ]);

    res.status(200).json({
      success: true,
      topCustomers: analytics[0].topCustomers,
      salesByCategory: analytics[0].salesByCategory
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

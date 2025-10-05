import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
// Connect to DB first, then start server
console.log("--------------------------------------------------");
await connectDB();
app.listen(PORT, () => {
  console.log("--------------------------------------------------");
  console.log("📱 Bunkit API v0.1");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("--------------------------------------------------");
});

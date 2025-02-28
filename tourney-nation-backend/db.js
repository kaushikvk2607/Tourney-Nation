const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const dbUrl = process.env.MONGODB_URI;

console.log("🔍 Checking DB URL:", dbUrl); // Debugging output

if (!dbUrl) {
    console.error("❌ MONGODB_URI is undefined! Check your environment variables.");
    process.exit(1);
}

async function connectDB() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
}

connectDB();

module.exports = mongoose;

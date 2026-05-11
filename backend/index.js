import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Abacify API running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  const message = error.message || "Unknown error";
  console.error("Failed to start server:", message);

  if (message.includes("querySrv")) {
    console.error(
      "MongoDB Atlas DNS lookup failed. Check internet/DNS access, Atlas cluster hostname, and whether mongodb+srv is allowed on this network.",
    );
  }

  if (message.includes("bad auth") || message.includes("Authentication failed")) {
    console.error("MongoDB authentication failed. Check the Atlas database username and password in MONGODB_URI.");
  }

  if (message.includes("IP") || message.includes("whitelist")) {
    console.error("MongoDB Atlas rejected the connection. Add your current IP to Network Access in Atlas.");
  }

  process.exit(1);
});

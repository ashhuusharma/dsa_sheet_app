const mongoose = require('mongoose');

// Connection URI using environment variables
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dsasheet.kvzd2.mongodb.net/dsa_test`;

mongoose.connect(mongoURI).then(() => {
  const db = mongoose.connection.useDb(process.env.DB_NAME);
  console.log("MongoDB connected to the database.");
}).catch((err) => {
  console.log("MongoDB connection error: " + err.message);
});

// Connection events for better logging
mongoose.connection.on('connected', () => {
  console.log("MongoDB connected to the database.");
});

mongoose.connection.on('error', (err) => {
  console.log("MongoDB connection error: " + err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log("MongoDB connection is disconnected.");
});

// Handling process exit to close MongoDB connection cleanly
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination.");
  process.exit(0);
});

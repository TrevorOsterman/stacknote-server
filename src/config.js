module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    "postgresql://TrevorOsterman@localhost/StackNote" ||
    process.env.DATABASE_URL
};

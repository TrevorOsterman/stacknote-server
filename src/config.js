module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://spmxycxglesvva:07c1c778d83781a3cd9d343a822e5b87b41c0fc271ef8b1f3c5d3db304a8d77e@ec2-107-22-216-123.compute-1.amazonaws.com:5432/d7ck4uiprbrcg1"
};

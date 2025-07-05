const host =
  process.argv.includes("--dev") == 1
    ? "localhost:61613"
    : "stremio-ws.onrender.com";

const url =
  process.argv.includes("--dev") == 1
    ? "http://localhost:61613/"
    : "https://stremio-ws.onrender.com";

module.exports = { host, url };

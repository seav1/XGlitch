const C_T = process.env.C_T || "eyJhIjoiZjAzMGY1ZDg4OGEyYmRlN2NiMDg3NTU5MzM4ZjE0OTciLCJ0IjoiYzYyMTE0ZGYtYWYwZC00YTU2LWE1NjctMjM3NDdjMmI0M2ExIiwicyI6Ik5XWXlZakkxWVRndE5UUXpaQzAwTjJGa0xUaGxabVV0WVRReU1HWmlOMkl3T0dVeSJ9";
const N_S = process.env.N_S || "nz.seav.eu.org";
const N_K = process.env.N_K || "mTP8qwlGOuWO8c3TsV";
const port = process.env.SERVER_PORT || process.env.PORT || 3000;

const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const http = require('http');
const app = express();

const URLS_x86_64 = ["https://github.com/seav1/dl/releases/download/files/cf", "https://github.com/seav1/dl/releases/download/files/nz", "https://github.com/seav1/xr/releases/download/latest/xray-linux-amd64"];
const URLS_arm = ["https://github.com/seav1/dl/releases/download/files/cf-arm", "https://github.com/seav1/dl/releases/download/files/nz-arm", "https://github.com/seav1/xr/releases/download/latest/xray-linux-arm64"];
const FILES = ["cf", "nz", "xr"];

const downloadFile = async (url, filename) => {
  const writer = fs.createWriteStream(`./${filename}`);
  const response = await axios({ url, method: 'GET', responseType: 'stream' });
  response.data.pipe(writer);
  return new Promise((resolve) => {
    writer.on('finish', resolve);
  });
};

const executeCommand = (command) => {
  return new Promise((resolve) => {
    exec(command, (error, stdout) => {
      resolve(stdout);
    });
  });
};

const main = async () => {
  const urls = process.arch === 'x64' ? URLS_x86_64 : URLS_arm;
  for (let i = 0; i < urls.length; i++) {
    await downloadFile(urls[i], FILES[i]);
    await executeCommand(`chmod +x ./${FILES[i]}`);
  }

  await executeCommand(`nohup ./cf tunnel --edge-ip-version auto run --protocol http2 --token ${C_T} --url http://localhost:8002 >/dev/null 2>&1 &`);
  await executeCommand(`nohup ./nz -s ${N_S}:443 -p ${N_K} --tls >/dev/null 2>&1 &`);
  await executeCommand(`nohup ./xr >/dev/null 2>&1 &`);
};

main();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
});

const server = http.createServer(app);

server.on('upgrade', createProxyMiddleware({
  target: `ws://localhost:8002`,
  changeOrigin: true,
  ws: true,
}));

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

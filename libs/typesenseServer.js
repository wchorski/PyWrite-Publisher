// might come back to this is elastilunr.js doesn't work out

const { exec } = require("child_process");


const API_KEY = process.env.TYPESENSE_ADMIN_API_KEY;
const PORT = 8108;

const command = `docker run -d -p ${PORT}:8108 -v C:/Users/wchorski/vscode/nextjs-obsidian-publish/db/typesense-data/:/data \
typesense/typesense:0.22.0.rcu6 --data-dir /data --api-key=${API_KEY} --listen-port ${PORT}  --enable-cors`;

exec(command, (err, stdout, stderr) => {
  if (!err && !stderr) console.log("Typesense Server is running...");

  if (err)    console.log("Error running server: ", err)

  if (stderr) console.log("Error running server: ", stderr)

  if (stdout) console.log("Server output: ", stdout)
})
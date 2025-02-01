const chokidar = require("chokidar");
const { spawn } = require("child_process");
const kill = require("kill-port");

// Path to the folder to watch
const watchPath = "./src";
const watchPath2 = "./src/partials";

// Keep track of existing files
const existingFiles = new Set();

const startServer = () => {
  console.log("Starting Webpack Dev Server...");
  const server = spawn("npm", ["start"], {
    stdio: "inherit",
    shell: true,
  });
  return server;
};

// Start the Webpack Dev Server
let server = startServer();

const restartServer = async () => {
  console.log("Restarting Webpack Dev Server...");
  await kill(5000);
  server.kill();
  server = startServer();
};

// Watch for file changes (additions and removals)
const watcher = chokidar.watch(watchPath, { ignoreInitial: true });
const watcher2 = chokidar.watch(watchPath2, { ignoreInitial: true });

watcher.on("add", (filePath) => {
  if (!existingFiles.has(filePath)) {
    console.log(`New file detected: ${filePath}`);
    existingFiles.add(filePath);
    restartServer();
  }
});

watcher.on("unlink", (filePath) => {
  if (existingFiles.has(filePath)) {
    console.log(`File removed: ${filePath}`);
    existingFiles.delete(filePath);
    restartServer();
  }
});

watcher2.on("change", (filePath) => {
  console.log(`File changed: ${filePath}`);
  restartServer();
});

// Populate existing files on startup
watcher.on("ready", () => {
  const watched = watcher.getWatched();
  for (const [folder, files] of Object.entries(watched)) {
    files.forEach((file) => existingFiles.add(`${folder}/${file}`));
  }
  console.log("Initial scan complete. Watching for new files...");
});

process.on("SIGINT", () => {
  watcher.close();
  watcher2.close();
  server.kill();
  console.log("\nWatcher stopped.");
  process.exit();
});

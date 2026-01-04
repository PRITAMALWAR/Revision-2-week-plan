const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const dir = "./watched";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log(`Created folder '${dir}'`);
}

class FileWatcher extends EventEmitter {
  constructor(dir) {
    super();
    this.dir = dir;
    this.files = new Set();

    fs.readdir(dir, (err, files) => {
      if (err) {
        this.emit("error", err);
      } else {
        files.forEach(file => this.files.add(file));
      }
    });

    // Start watching
    this.startWatching();
  }

  startWatching() {
    fs.watch(this.dir, (eventType, filename) => {
      if (!filename) return;

      const filePath = path.join(this.dir, filename);
      const now = new Date().toLocaleTimeString();

      fs.stat(filePath, (err, stats) => {
        if (err) {
          // File deleted
          if (this.files.has(filename)) {
            this.files.delete(filename);
            this.emit("deleted", { filename, time: now });
          } else {
            this.emit("error", err);
          }
        } else {
          // File exists
          if (!this.files.has(filename)) {
            // New file added
            this.files.add(filename);
            this.emit("added", { filename, time: now });
          } else if (stats.isFile() && eventType === "change") {
            // File modified
            this.emit("modified", { filename, time: now });
          }
        }
      });
    });
  }
}

const watcher = new FileWatcher(dir);

watcher.on("added", ({ filename, time }) => {
  console.log(`[${time}] File Added: ${filename}`);
});

watcher.on("modified", ({ filename, time }) => {
  console.log(`[${time}] File Modified: ${filename}`);
});

watcher.on("deleted", ({ filename, time }) => {
  console.log(`[${time}] File Deleted: ${filename}`);
});

watcher.on("error", err => {
  console.error("Error:", err.message);
});

console.log(`Watching '${dir}' directory for file changes...`);
